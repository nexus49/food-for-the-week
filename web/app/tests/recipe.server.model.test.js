'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Recipe = mongoose.model('Recipe');

/**
 * Globals
 */
var user, recipeWithUrl, recipeWithoutUrl, recipeWithIngredients;

/**
 * Unit tests
 */
describe('Recipe Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() {
			recipeWithUrl = new Recipe({
				name: 'Recipe Name',
				user: user,
				url : 'http://someurl.com'
			});

			recipeWithoutUrl = new Recipe({
				name: 'Recipe Name',
				user: user
			});

			recipeWithIngredients = new Recipe({
				name: 'Recipe Name',
				user: user,
				url : 'http://someurl.com',
				ingredients : [
					{name: 'Salt', quantity: 1, unit: 'pcs', user: user}
				]
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save a recipe with URL without problems', function(done) {
			return recipeWithUrl.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to save a recipe without URL without problems', function(done) {
			return recipeWithoutUrl.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to save a recipe with Ingredients without problems', function(done) {
			return recipeWithIngredients.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) {
			recipeWithUrl.name = '';

			return recipeWithUrl.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) {
		Recipe.remove().exec();
		User.remove().exec();

		done();
	});
});
