var assert = require('assert');
var util = require('../util');
var PlaylistPage = require('../pages/playlistPage');

describe('playlist tests', function() {

  it('adds unplayed songs', function () {
    util.addSongs(1);
    console.log('PlaylistPage.getPlayedButtonTextByCSSIndex(1)');
    console.log(PlaylistPage.getPlayedButtonTextByCSSIndex(1));
    assert(
      PlaylistPage.getPlayedButtonTextByCSSIndex(1) === 'Play Song',
      'song should start out unplayed'
    );
  });

});
