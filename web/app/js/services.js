'use strict';

/* Services */

var phonecatServices = angular.module('fftwServices', ['ngResource']);

phonecatServices.factory('Recipe', ['$resource',
  function($resource){
    return $resource('recipes/:recipeId.json', {}, {
      query: {method:'GET', params:{recipeId:'recipes'}, isArray:true}
    });
  }]);
