module.exports = function(io) {
	var express = require('express');
	var router = express.Router();
	var Setlist = require('../models/Setlist');

	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.sendfile('./public/index.html');
	});

	router.get('/advancedSearch', function(req, res, next) {
		res.sendfile('./public/index.html');
	});

	router.get('/setlist/*', function(req, res, next) {
		res.sendfile('./public/index.html');
	});

	io.on('connection', function (socket) {
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
