'use strict';

/* Services */

var fftwServices = angular.module('fftwServices', ['ngResource']);

fftwServices.factory('Recipe', ['$resource',
  function($resource){
    return $resource('recipes/:recipeId.json', {}, {
      query: {method:'GET', params:{recipeId:'recipes'}, isArray:true}
    });
  }]);
