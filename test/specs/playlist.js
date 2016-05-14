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
      'most recent played song shows Now Playing'
    );
  });

  it('add 2 songs, play earliest song, song shows "now playing"', function () {
    util.addSongs(2);
    PlaylistPage.playSongByIndex(1);

    assert(
      PlaylistPage.getPlayedButtonTextByIndex(1) === 'Now Playing',
      'most recent played song shows Now Playing'
    );
  });

  it('add && play 2 songs, latest song shows now playing', function () {
    util.addSongs(2);
    PlaylistPage.playSongByIndex(0);
    PlaylistPage.playSongByIndex(1);

    assert(
      PlaylistPage.getPlayedButtonTextByIndex(0) === 'Now Playing',
      'most recent played song shows Now Playing'
    );

    assert(
      PlaylistPage.getPlayedButtonTextByIndex(1) === 'Played',
      'older played songs show Played'
    );
  });

});
