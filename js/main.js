
"use strict";

var app = angular.module ('wyliodrin', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'home.html',
    // controller: 'BookController',
  })
  .when('/features', {
    templateUrl: 'features.html',
    // controller: 'ChapterController'
  })
  .when('/get-involved', {
    templateUrl: 'get-involved.html',
    // controller: 'ChapterController'
  })
  .when('/devices', {
    templateUrl: 'devices.html',
    // controller: 'ChapterController'
  })
  .when('/team', {
    templateUrl: 'team.html',
    // controller: 'ChapterController'
  })
  .when('/technology', {
    templateUrl: 'technology.html',
    // controller: 'ChapterController'
  });
});