var assert = require('assert');
var util = require('../util');
var PlaylistPage = require('../pages/playlistPage');

describe('playlist tests', function() {

  it('adds unplayed songs', function () {
    util.addSongs(1);
    assert(
      PlaylistPage.getPlayedButtonTextByIndex(0) === 'Play Song',
      'song should start out unplayed'
    );
  });

  it('playing most recent song shows "now playing"', function () {
    util.addSongs(1);
    PlaylistPage.playSongByIndex(0)

    assert(
      PlaylistPage.getPlayedButtonTextByIndex(0) === 'Now Playing',
      'song should start out unplayed'
    );
  });

  it('adds 2 songs, plays earliest song, song shows "now playing"', function () {
    util.addSongs(2);
    PlaylistPage.playSongByIndex(1);

    assert(
      PlaylistPage.getPlayedButtonTextByIndex(1) === 'Now Playing',
      'song should start out unplayed'
    );
  });

});
