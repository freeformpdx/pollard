var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var scheduleSchema = new Schema({
  showID: String,
  startDay: String,
  startHour: Number,
  endDay: String,
  endHour: Number,
});

scheduleSchema.statics.findShowIDByTime = function(timestamp, cb) {
  var momentTime = moment(timestamp);

  var momentDay = momentTime.day();
  var momentHour = momentTime.hour();

  this.findOne({
    "startDay": {$lte: momentDay},
    "endDay": {$gte: momentDay},
    "startHour": {$lte: momentHour},
    $or: [
      {"endHour": {$gt: momentHour}},
      {"endHour": 0},
    ],
  }, cb)
}

var Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
