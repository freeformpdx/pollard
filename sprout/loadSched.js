var mongoose = require('mongoose')

var config = require('../env/env.js');
var pollardSched = require('./pollardSched.json');

mongoose.connect(config.DB_NAME);

var Schedule = require('./models/Schedule');

for (var idx = 0; idx < pollardSched.length; idx++) {
  // console.log(pollardSched[idx]);
  var schedule = new Schedule(pollardSched[idx]);
  schedule.save().then(function(schedule) {
    console.log('added: ' + schedule.showID);
  });
}
