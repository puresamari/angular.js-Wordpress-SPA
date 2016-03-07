'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat-util'),
    uglify = require('gulp-uglify'),
    wrap = require("gulp-wrap");
 
gulp.task('sass', function () {
    gulp.src('src/scss/style.scss')
        .pipe(sass({outputstyle:'compact'}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('resources', function () {
    gulp.src('src/resources/**/*')
        .pipe(gulp.dest(('dist/')));
});
 
gulp.task('vendor', function(){
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-material/angular-material.min.js'
    ])
        .pipe(concat('vendor.bundle.js'))
        .pipe(gulp.dest('dist/vendor/'));
    gulp.src([
        'node_modules/angular/angular.min.js.map',
        'node_modules/angular-ui-router/angular-ui-router.min.js.map',
        'node_modules/angular-animate/angular-animate.min.js.map',
        'node_modules/angular-aria/angular-aria.min.js.map',
        'node_modules/angular-material/angular-material.min.js.map'
    ])
        .pipe(gulp.dest('dist/vendor/'));
    
    gulp.src([
        'node_modules/angular-material/angular-material.min.css',
        'node_modules/angular-material/angular-material.layouts.min.css',
    ])
        .pipe(concat('vendor.bundle.css'))
        .pipe(gulp.dest('dist/vendor/'));
});
 
gulp.task('js', function(){
    gulp.src([
        'src/app/app.js',
        'src/app/**/*.directive.js',
        'src/app/**/*.controller.js',
        'src/app/**/*.factory.js',
        'src/app/routes.js'
     ])
    .pipe(uglify({
        mangle: false,
        output: {
            beautify: true
        }
    }))
    .pipe(concat.header('\n//<%= file.path %>\n\n'))
    .pipe(concat('app.js'))
    .pipe(wrap('(function(angular) {\n<%= contents %>\n})(window.angular);'))
    .pipe(gulp.dest('dist/'));
});
 
gulp.task('core', function(){
    gulp.src('src/php/**/*.php')
        .pipe(gulp.dest('dist/'));
});

gulp.task('views', function(){
    gulp.src('src/views/**/*.htm')
        .pipe(gulp.dest('dist/views/'));
});

gulp.task('templates', function(){
    gulp.src('src/templates/**/*.htm')
        .pipe(gulp.dest('dist/templates/'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/app/**/*.js', ['js']);
    gulp.watch('src/php/**/*.php', ['core']);
    gulp.watch('src/views/**/*.htm', ['views']);
    gulp.watch('src/templates/**/*.htm', ['templates']);
    gulp.watch('src/resources/*', ['resources']);
});

gulp.task('dist', function(){
    gulp.start(['sass', 'vendor', 'js', 'core', 'views', 'resources'])
});

gulp.task('default', ['dist', 'watch']);