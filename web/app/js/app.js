'use strict';

/* App Module */

var fftwApp = angular.module('fftwApp', [
  'ngRoute',
  'textAngular',
  'fftwControllers',
  'fftwServices'
]);



fftwApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/recipes', {
        templateUrl: 'partials/recipes-list.html',
        controller: 'RecipesListCtrl'
      }).
      when('/recipes/add', {
        templateUrl: 'partials/recipes-add.html',
        controller: 'RecipeAddController'
      }).
      when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardController'
      }).
      otherwise({
        redirectTo: '/dashboard'});
  }]);
