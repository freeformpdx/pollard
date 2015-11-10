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
			console.log(JSON.stringify(data, null, 2));

			// LOG ALL Setlists
			Setlist.find().exec()
			.then(function(setlist) {
				console.log("**************");
				console.log("*SETLIST DATA*");
				console.log("**************");
				console.log(setlist);
			});
		});


		socket.on('loadNewSetlist', function (data) {
			var setlist = new Setlist({
				songs: []
			});
			setlist.save()
			.then(function(setlist) {
				socket.emit('newSetlistCreated', { id: setlist.id });
			});
		});

		socket.on('loadExistingSetlist', function (request) {
			Setlist.findById(request.id).exec()
			.then(function (setlist) {
				socket.emit('existingSetlistLoaded', {
					setlist: {
						id: setlist.id,
						songs: setlist.songs
					}
				});
			})
		});

		socket.on('pushState', function (newState) {
			if (newState.view.setlist.id) {
				Setlist.findById(newState.view.setlist.id, function (err, setlist) {
					if (err) throw err;
					setlist.songs = newState.data.setlist.songs;
					return setlist.save();
				});
			} else {
				console.log('no setlist id yet');
			}
		});

	});




	return router;

}
