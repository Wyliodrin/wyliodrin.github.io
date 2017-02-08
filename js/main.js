
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
  });
});