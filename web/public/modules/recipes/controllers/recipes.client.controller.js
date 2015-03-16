'use strict';

// Recipes controller
angular.module('recipes').controller('RecipesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Recipes',
	function($scope, $stateParams, $location, Authentication, Recipes) {
		$scope.authentication = Authentication;

		// Create new Recipe
		$scope.create = function() {
			// Create new Recipe object
			var recipe = new Recipes ({
				name: this.name,
				url: this.url
			});

			// Redirect after save
			recipe.$save(function(response) {
				$location.path('recipes/' + response._id);

				// Clear form fields
				$scope.name = '';
				$scope.url = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Recipe
		$scope.remove = function(recipe) {
			if ( recipe ) {
				recipe.$remove();

				for (var i in $scope.recipes) {
					if ($scope.recipes [i] === recipe) {
						$scope.recipes.splice(i, 1);
					}
				}
			} else {
				$scope.recipe.$remove(function() {
					$location.path('recipes');
				});
			}
		};

		// Update existing Recipe
		$scope.update = function() {
			var recipe = $scope.recipe;

			recipe.$update(function() {
				$location.path('recipes/' + recipe._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Update existing Recipe
		$scope.insertIngredient = function() {
			var recipe = $scope.recipe;

			console.log('Updating ' + this.ingredientName);
			console.log('Updating ' + this.ingredientQuantity);
			console.log('Updating ' + this.ingredientUnit);


			recipe.ingredients.push({
				name: this.ingredientName,
				quantity: this.ingredientQuantity,
				unit: this.ingredientUnit
			});

			console.log('Updating' + JSON.stringify(recipe));

			recipe.$update(function() {
				$location.path('recipes/' + recipe._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Recipes
		$scope.find = function() {
			$scope.recipes = Recipes.query();
		};

		// Find existing Recipe
		$scope.findOne = function() {
			$scope.recipe = Recipes.get({
				recipeId: $stateParams.recipeId
			});
		};
	}
]);
