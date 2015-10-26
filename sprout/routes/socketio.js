module.exports = function(io) {
	var express = require('express');
	var router = express.Router();
	var Setlist = require('../models/Setlist');

	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.render('index', { title: 'Express' });
	});

	io.on('connection', function (socket) {
		console.log("**************");
		console.log("SOMEONE'S HERE");
		console.log("**************");

		socket.on('pushState', function (data) {
			console.log("**************");
			console.log("* CLIENT DATA *");
			console.log("**************");
			console.log(JSON.stringify(data));
			// Setlist
		});

		socket.on('loadNew', function (data) {
			var setlist = new Setlist({
				state: {}
			});
			setlist.save()
			.then(function(setlist) {
				socket.emit('newSetlistCreated', { id: setlist.id });
			});
		});

		socket.on('pushState', function (data) {
			if (data.view.setlist.id) {
				Setlist.findById(data.view.setlist.id).exec()
				.then(function (setlist) {
					setlist.state = data;
					setlist.markModified('state');
					return setlist.save();
				});
			} else {
				console.log('no setlist id yet');
			}
		});

	});




	return router;

}
