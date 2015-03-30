'use strict';

module.exports = function(app) {
	var config = require('../../app/controllers/config.server.controller');

	app.route('/config/categories')
	  .get(config.categories);

		app.route('/config/units')
		  .get(config.units);
};
