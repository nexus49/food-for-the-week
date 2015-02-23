'use strict';

/* App Module */

var fftwapp = angular.module('fftwApp', [
  'ngRoute',
  'fftwControllers',
  'fftwServices'
]);

// fftwApp.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/recipes', {
//         templateUrl: 'partials/recipes-list.html',
//         controller: 'RecipesListCtrl'
//       }).
//       otherwise({
//         redirectTo: '/recipes'
//       });
//   }]);
