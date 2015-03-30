'use strict';

/**
 * List of categories
 */
exports.categories = function(req, res) {
			res.jsonp(global.categories);
};

/**
 * List of units
 */
exports.units = function(req, res) {
			res.jsonp(global.units);
};
