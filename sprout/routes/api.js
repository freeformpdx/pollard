var moment = require('moment');
var express = require('express');
var router = express.Router();

var Setlist = require('../models/Setlist');
var Schedule = require('../models/Schedule');

router.get('/setlist/:id', function(req, res, next) {
	var setlistId = req.params.id;
	Setlist.findById(setlistId, function(err, setlist) {
		if (err) throw err;
		res.json(setlist);
	});
});

router.get('/nowPlaying', function(req, res, next) {
  Schedule.findShowIDByTime(moment(), function(err, showDoc) {
    if (err) throw err;
    Setlist.findOne({
      showID: showDoc.showID
    }).sort({'createdAt': -1}).exec(function(err, setlist) {
      if (err) throw err;
      if (setlist.songs.length > 0) {
        for (var idx = 0; idx < setlist.songs.length; idx++) {
          if (setlist.songs[idx].played) {
            res.json(setlist.songs[idx]);
          }
        }
      }
    })
  });
});

router.get('/newSetlist/:showID', function(req, res, next) {
  var showID = req.params.showID;
  var setlist = new Setlist({
    songs: [],
    showID: showID,
  });
  setlist.save()
  .then(function(setlist) {
    res.json({ id: setlist.id, showID: setlist.showID });
  });
});

module.exports = router;
