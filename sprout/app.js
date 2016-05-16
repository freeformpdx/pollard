var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var socket_io = require('socket.io');
var mongoose = require('mongoose')

var socketRoute = require('./routes/socketio');
var api = require('./routes/api');
var users = require('./routes/users');
var config = require('./env.js');

var app = express();

var io = socket_io();
app.io = io;


var options = {
  server: {
    socketOptions: {
      keepAlive: 30000,
      connectTimeoutMS: 30000
    }
  }
};

mongoose.connect(config.DB_NAME, options);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* file upload */
var Schedule = require('./models/Schedule');
var upload = multer({ dest: 'uploads/' })

app.post('/api/loadSchedule', upload.single('sched'), function (req, res, next) {
  if (req.body.pw == config.LOAD_SCHED_PW) {
    if (!req.file.path) {
      return res.send("No sched found: req:\n" + JSON.stringify(req.file, null, 2));
    }

    // clear sched first
    var schedStream = Schedule.find().stream();

    schedStream.on('data', function(doc) {
      doc.remove();
    }).on('close', function() {
      // after clear, load sched
      try {
        require('fs').readFile(req.file.path, 'utf8', function (err, data) {
          if (err) throw err; // we'll not consider error handling for now

          var sched = JSON.parse(data);
          for (var idx = 0; idx < sched.length; idx++) {
            var schedule = new Schedule(sched[idx]);
            schedule.save().then(function(schedule) {
              console.log('added: ' + schedule.showID);
            });
          }
          setTimeout(function() {
            res.send("Loaded!");
          }, 3000);
        });
      } catch(e) {
        console.log(JSON.stringify(e));
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
/* file upload */


app.use('/api', api);
app.use('/users', users);
app.use('/', socketRoute(app.io));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
