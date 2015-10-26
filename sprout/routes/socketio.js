module.exports = function(io) {
	var express = require('express');
	var router = express.Router();

	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.render('index', { title: 'Express' });
	});

	io.on('connection', function (client) {
		console.log("**************");
		console.log("SOMEONE'S HERE");
		console.log("**************");
	});



	return router;

}
