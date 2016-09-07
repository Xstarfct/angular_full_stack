'use strict';

angular.module('angularFullStackApp', ['angularFullStackApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'ui.router'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
