var app = angular.module('WSPA', ['ui.router', 'ngMaterial', 'ngAnimate']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('pink');
});