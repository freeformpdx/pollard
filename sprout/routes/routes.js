var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

router.get('/advancedSearch', function(req, res, next) {
  res.sendfile('./public/index.html');
});

router.get('/loadSchedule', function(req, res, next) {
  res.sendfile('./public/index.html');
});

router.get('/setlist/*', function(req, res, next) {
  res.sendfile('./public/index.html');
});

module.exports = router;
