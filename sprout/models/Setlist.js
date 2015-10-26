/**
 * // setlist.state is a Mixed type, so you have to
 * // EXPLICITLY mark the mongoose model as modified
 * setlist.state = {newState } 
 * setlist.markModified('state');
 * setlist.save(); // state will now get saved
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var setlistSchema = new Schema({
	state: Schema.Types.Mixed
});

var Setlist = mongoose.model('Setlist', setlistSchema);

module.exports = Setlist;
