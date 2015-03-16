'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


	/**
	 * Ingredients Schema
	 */
var units = 'gr kg oz lbs cups tbs ts ml liter lug knob pcs'.split(' ');
var IngredientsSchema = new Schema({
		name: {
		type: String,
		default: '',
		required: 'Please fill an ingredient Name',
		trim: true
	},
	quantity: {
		type: Number,
		required: 'Please fill a Quantity.',
		trim: true
	}, unit: {
		type: String,
		enum: units,
		required: 'Please select a Unit.',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

/**
 * Recipe Schema
 */
var RecipeSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Recipe name',
		trim: true
	},
	url: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	ingredients : [IngredientsSchema]
});

mongoose.model('Recipe', RecipeSchema);
