var config = require('../env.js');
var mongoose = require('mongoose')
var moment = require('moment');

mongoose.connect(config.DB_NAME);

var Schedule = require('./models/Schedule.js');


var timeStamp = moment().format();
timeStamp = '2016-03-06T00:55:58-08:00';

Schedule.findShowIDByTime(timeStamp, function(err, showDoc) {
  if (err) {
    console.log('no show found @ that time!');
  }
  console.log('SHOW: '+ showDoc);
  console.log('SHOWID: '+ showDoc.showID);
  process.exit();
});
