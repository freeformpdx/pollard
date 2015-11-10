var express = require('express');
var router = express.Router();

var Setlist = require('../models/Setlist');

router.get('/setlist/:id', function(req, res, next) {
	var setlistId = req.params.id;
	Setlist.findById(setlistId, function(err, setlist) {
		if (err) throw err;
		res.json(setlist);
	});
});

module.exports = router;
