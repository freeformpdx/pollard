var config = require('../env/env.js');
var mongoose = require('mongoose')
var moment = require('moment');

mongoose.connect(config.DB_NAME);

var Schedule = require('./models/Schedule.js');
var Setlist = require('./models/Setlist.js');


var timeStamp = moment().format();
timeStamp = '2016-03-06T00:55:58-08:00';

/*
Schedule.findShowIDByTime(timeStamp, function(err, showDoc) {
  if (err) {
    console.log('no show found @ that time!');
  }
  console.log('SHOW: '+ showDoc);
  console.log('SHOWID: '+ showDoc.showID);
  process.exit();
});
*/

Schedule.findShowIDByTime(moment(), function(err, showDoc) {
  if (err) throw err;
  console.log(showDoc.showID);
  Setlist.findOne({
    showID: showDoc.showID
  }).sort({'createdAt': -1}).exec(function(err, setlist) {
    if (err) throw err;
    if (setlist.songs.length > 0) {
      console.log(setlist);
      for (var idx = 0; idx < setlist.songs.length; idx++) {
        if (setlist.songs[idx].played) {
          console.log(setlist.songs[idx]);
          process.exit();
        }
      }
    }
    process.exit();
  })
});
