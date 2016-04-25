var config = require('./env.js');
var mongoose = require('mongoose')

mongoose.connect(config.DB_NAME);

var Schedule = require('./models/Schedule.js');

var schedStream = Schedule.find().stream();

schedStream.on('data', function(doc) {
  console.log("rming doc");
  doc.remove();
}).on('close', function() {
  console.log("done rming docs");
  process.exit();
});
