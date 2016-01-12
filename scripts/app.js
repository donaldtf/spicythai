'use strict';

/**
 * @ngdoc overview
 * @name spicythaiApp
 * @description
 * # spicythaiApp
 *
 * Main module of the application.
 */
angular
  .module('spicythaiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/catering', {
        templateUrl: 'views/catering.html',
        controller: 'MainCtrl'
      })
      .when('/careers', {
        templateUrl: 'views/careers.html',
        controller: 'AboutCtrl'
      })
      .when('/directions', {
        templateUrl: 'views/directions.html',
        controller: 'AboutCtrl'
      })
      .when('/fullmenu', {
        templateUrl: 'views/fullmenu.html',
        controller: 'MainCtrl'
      })
      .when('/fullmenu2', {
        templateUrl: 'views/fullmenu2.html',
        controller: 'MainCtrl'
      })
      .when('/fullmenu3', {
        templateUrl: 'views/fullmenu3.html',
        controller: 'MainCtrl'
      })
      .when('/lunch', {
        templateUrl: 'views/lunch.html',
        controller: 'AboutCtrl'
      })
      .when('/reviews', {
        templateUrl: 'views/reviews.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
