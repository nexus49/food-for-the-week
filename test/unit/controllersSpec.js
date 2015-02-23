'use strict';

describe('RecipesListCtrl', function(){

  beforeEach(module('fftwApp'));

  it('should create "recipes" model with 2 recipes', inject(function($controller) {
    var scope = {},
    ctrl = $controller('RecipesListCtrl', {$scope:scope});

    expect(scope.recipes.length).toBe(2);
  }));


  it('should set the default value of orderProp model', inject(function($controller) {
    var scope = {},
    ctrl = $controller('RecipesListCtrl', {$scope:scope});

    expect(scope.orderProp).toBe('rating');
  }));

});
