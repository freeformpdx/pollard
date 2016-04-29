var moment = require('moment-timezone');
var express = require('express');
var router = express.Router();

var config = require('../env.js');

var Setlist = require('../models/Setlist');
var Schedule = require('../models/Schedule');

router.get('/setlist/:id', function(req, res, next) {
	var setlistId = req.params.id;
	Setlist.findById(setlistId, function(err, setlist) {
		if (err) throw err;
		res.json(setlist);
	});
});

router.get('/nowPlaying/:format', function(req, res, next) {
  Schedule.findShowIDByTime(moment().tz("America/Los_Angeles"), function(err, showDoc) {
    if (err) throw err;
    if (!showDoc) { return res.send('KFFP FREEFORM PORTLAND!'); }

    Setlist.findOne({
      showID: showDoc.showID
    }).sort({'createdAt': -1}).exec(function(err, setlist) {
      if (err) {
        return res.send(err);
      }

      var response = 'KFFP FREEFORM PDX!';

      if (setlist) {
        response.setlistID = setlist.id;
        if (setlist.songs.length > 0) {
          for (var idx = 0; idx < setlist.songs.length; idx++) {
            if (setlist.songs[idx].played) {
              response = formatSong(req.params.format, setlist.songs[idx]);
              break;
            }
            console.log('ERROR: no played songs for setlist ' + setlist.id);
          }
        } else {
          console.log('ERROR: no songs for setlist ' + setlist.id);
        }
      } else {
        console.log('ERROR: no setlist found for ' + showDoc.showID);
      }
      res.json(response);
    })
  });
});

function formatSong(format, song) {
  switch (format) {
    case 'butt':
      return getButtFormat(song);
      break;
    case 'json':
    case 'raw':
    default:
      return song;
  }
}

function getButtFormat(song) {
  var inputs = song.inputs;
  var title = "Unknown Song";
  var artist = "Unkwnown Artist";
  for (var idx = 0; idx < inputs.length; idx++) {
    if (inputs[idx].name == 'title') {
      title = inputs[idx].value;
    }
    if (inputs[idx].name == 'artist') {
      artist = inputs[idx].value;
    }
  }
  return artist + ' - ' + title;
}

router.get('/setlistsByShowID/:showID', function(req, res, next) {
  var showID = req.params.showID;
  Setlist.find({ 'showID': showID }, function(err, setlists) {
    if (err) throw err;
		res.json(setlists);
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
    res.redirect('/setlist/'+setlist.id);
  });
});

router.post('/loadSched/:pw', function(req, res, next) {
  if (req.params.pw == config.LOAD_SCHED_PW) {
    if (!req.body.sched) {
      return res.send("No sched found: req:\n" + JSON.stringify(req.body, null, 2));
    }

    // clear sched first
    var schedStream = Schedule.find().stream();

    schedStream.on('data', function(doc) {
      doc.remove();
    }).on('close', function() {
      // after clear, load sched
      try {
        var sched = JSON.parse(req.body.sched);
        for (var idx = 0; idx < sched.length; idx++) {
          var schedule = new Schedule(sched[idx]);
          schedule.save().then(function(schedule) {
            console.log('added: ' + schedule.showID);
          });
        }
        setTimeout(function() {
          res.send("Loaded!");
        }, 3000);
      } catch(e) {
        res.status(400).send('Invalid JSON string');
      }
    });
  } else {
    // security lol
    setTimeout(function() {
      res.send("NUH UH");
    }, 3000);
  }
});

router.get('/500', function(req, res, next) {
  throw new Error("⚰ DAMN DUDE ITS FUUUUUCKED ⚰ ");
});

router.get('/ufuckindie', function(req, res, next) {
  process.exit();
});

module.exports = router;
