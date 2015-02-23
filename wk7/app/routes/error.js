module.exports = function (app) {
	
	//404s
	app.use(function (req, res, next) {
		res.status(404);

		if(req.accepts('html')){
			return res.send("<h2>I'm sorry, I coun't find that page.</h2>");
		}

		if(req.accepts("json")){
			return res.send({error: 'Not found'});
		}

		res.type('txt');
		res.send("Hmmm, couldn't find that page.");
	})

	app.use(function (err, req, res, next) {
		console.error('error at %s\n', req,url, err);
		res.send(500, "Oops, we made a boo boo");
	})
}