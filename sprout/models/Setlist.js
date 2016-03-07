var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* define song input schema */
var SongInput = new Schema({
	name: String,
	value: String
});

var Song = new Schema({
	inputs: [SongInput],
	img64px: String,
	img300px: String,
	played: Boolean
});

var setlistSchema = new Schema({
	songs: [Song],
  showID: String,
  createdAt: { type: Date, default: Date.now },
});

var Setlist = mongoose.model('Setlist', setlistSchema);

module.exports = Setlist;
