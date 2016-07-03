var moment = require('moment-timezone');
var express = require('express');
var router = express.Router();

var cors = require('cors')

var Setlist = require('../models/Setlist');
var Schedule = require('../models/Schedule');

var whitelist = [
  'http://kffp.rocks',
  'http://staging.kffp.rocks',
  'http://0.0.0.0:3000',
  'http://192.168.99.100/',
];

var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};

router.get('/setlist/:id', function(req, res, next) {
	var setlistId = req.params.id;
	Setlist.findById(setlistId, function(err, setlist) {
		if (err) throw err;
		res.json(setlist);
	});
});

router.get('/nowPlaying/:format', cors(), function(req, res, next) {
  Schedule.findShowIDByTime(moment().tz("America/Los_Angeles"), function(err, showDoc) {
    if (err) throw err;
    if (!showDoc) { return res.send('KFFP FREEFORM PORTLAND!'); }

    Setlist.findOne({
      showID: showDoc.showID
    }).sort({'createdAt': -1}).exec(function(err, setlist) {
      if (err) {
        return res.send(err);
      }

      var response = null;

      if (setlist) {
        if (setlist.songs.length > 0) {
          for (var idx = 0; idx < setlist.songs.length; idx++) {
            if (setlist.songs[idx].played) {
              response = formatSong(req.params.format, setlist.songs[idx]);
              response.setlistID = setlist.id;
              break;
            }
          }
          if (!response) {
            console.log('ERROR: no played songs for setlist ' + setlist.id);
          }
        } else {
          console.log('ERROR: no songs for setlist ' + setlist.id);
        }
      } else {
        console.log('ERROR: no setlist found for ' + showDoc.showID);
      }
      if (!response) {
        response = 'KFFP FREEFORM PDX!';
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

router.get('/setlistsByShowID/:showID', cors(), function(req, res, next) {
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


/**
 * Pollard frontend routes
 *
 **/

router.get('/loadNewSetlist', cors(corsOptions), function(req, res, next) {
  var setlist = new Setlist({
    songs: []
  });
  setlist.save()
  .then(function(setlist) {
    res.json({ id: setlist.id });
  });
});

router.options('/loadExistingSetlist', cors(corsOptions));
router.post('/loadExistingSetlist', cors(corsOptions), function(req, res, next) {
  Setlist.findById(req.body.id).exec()
  .then(function (setlist) {
    if (setlist) {
      res.json({
        setlist: {
          id: setlist.id,
          songs: setlist.songs
        }
      });
    } else {
      res.json({
        error: 'No Setlist found',
      });
    }
  })
});


router.options('/pushState', cors(corsOptions));
router.post('/pushState', cors(corsOptions), function(req, res, next) {
  var setlistId = req.body.newState.view.setlist.id;
  if (setlistId) {
    Setlist.findById(setlistId, function (err, setlist) {
      if (err) throw err;
      setlist.songs = req.body.newState.data.setlist.songs;
      setlist.save(function(err) {
        if (err) {
          res.json({
            error: 'ERROR: Server failed to save playlist'
          });
        }
        setlist.id = setlist['_id'];
        res.json({
          setlist: setlist,
        })
      });
    });
  } else {
    throw new Error('Pushing state when no setlist id exists in state');
  }
});

router.get('/500', function(req, res, next) {
  throw new Error("⚰ DAMN DUDE ITS FUUUUUCKED ⚰ ");
});

router.get('/ufuckindie', function(req, res, next) {
  process.exit();
});

/* Basic 'can i connect 2 mongo' health check */
router.get('/health', function(req, res, next) {
	Setlist.findOne({}, function(err, setlist) {
		if (err) throw err;
		res.send("OK");
	});
});

module.exports = router;
