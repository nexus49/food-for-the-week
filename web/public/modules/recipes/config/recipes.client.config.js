'use strict';

// Configuring the Recipes module
angular.module('recipes').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Recipes', 'recipes', 'dropdown', '/recipes(/create)?', false, ['user'], 0);
		Menus.addSubMenuItem('topbar', 'recipes', 'List Recipes', 'recipes', '/recipes', false, ['user'], 0);
		Menus.addSubMenuItem('topbar', 'recipes', 'New Recipe', 'recipes/create', '/recipes/create', false, ['user'], 1);
	}
]);
