var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("**************");
  res.sendfile('./public/index.html');
});

/* GET home page. */
router.get('/setlist/', function(req, res, next) {
	console.log("**************");
  res.sendfile('./public/index.html');
});

module.exports = router;
