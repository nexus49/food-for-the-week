'use strict';

/* Controllers */

var fftwControllers = angular.module('fftwControllers', []);

fftwControllers.controller('RecipesListCtrl',function ($scope) {
  $scope.recipes = [
    { 'recipeid' : '123121', 'name' : 'Pasta', 'description' : 'I love Pasta!', 'rating' : 5 },
    { 'recipeid' : '123122', 'name' : 'Soup', 'description' : 'What a great Soup!', 'rating' : 4}
  ];
  $scope.orderProp = 'rating';

});

fftwControllers.controller('DashboardController',function ($scope) {});

fftwControllers.controller('RecipeAddController', ['$scope', function($scope) {

 console.log('!!!');
 $scope.update = function(recipe) {
   console.log(recipe);
 };

}]);
