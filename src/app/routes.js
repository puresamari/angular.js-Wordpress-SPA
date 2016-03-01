app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('main', {
            abstract: true,
            templateUrl: wpThemeUrl+'/views/main.htm',
            controller: "MainCtrl as main"
        })
        .state('main.landing', {
            url: "/",
            templateUrl: wpThemeUrl+'/views/landing.htm',
            controller: "LandingCtrl as landing"
        })
        .state('main.page', {
            url: "/page/:id",
            templateUrl: wpThemeUrl+'/views/page.htm',
            controller: "PageCtrl as page"
        })
        .state('main.post', {
            url: "/post/:id",
            templateUrl: wpThemeUrl+'/views/post.htm',
            controller: "PostCtrl as post"
        })
        .state('main.image', {
            url: "/image/:id",
            templateUrl: wpThemeUrl+'/views/image.htm',
            controller: "ImageCtrl as image"
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        requireLinks: false
    });
});