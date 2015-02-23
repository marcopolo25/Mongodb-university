var errors = require('./errors');

module.exports = function (app) {
	//home page
	app.get('/', function (res, res) {
		res.render('home.jade');
	});

	errors(app);
}