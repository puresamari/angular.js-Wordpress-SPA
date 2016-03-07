var app = angular.module('WSPA', ['ui.router', 'ngMaterial', 'ngAnimate']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('pink');
});