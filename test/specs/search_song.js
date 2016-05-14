var assert = require('assert');
var util = require('../util.js');

var RoutesPage = require('../pages/routesPage');
var SearchSongPage = require('../pages/searchSongPage');
var SelectedSongPage = require('../pages/selectedSongPage');
var PlaylistPage = require('../pages/playlistPage');

describe('search song tests', function() {

  it('should add artist input to songSearch', function () {
    RoutesPage.makeNewPlaylist();

    var artistInput = "guided by voices";

    SearchSongPage.inputArtist(artistInput);

    assert(
      SearchSongPage.getArtistInput() == artistInput,
      'artist input should accept input'
    );

  });

  it('should add title input to songSearch', function () {
    RoutesPage.makeNewPlaylist();

    var titleInput = "gold star for robot boy";

    SearchSongPage.inputTitle(titleInput);

    assert(
      SearchSongPage.getTitleInput() == titleInput,
      'title input should accept input'
    );

  });

  it('should produce results', function () {
    RoutesPage.makeNewPlaylist();

    SearchSongPage.searchForSong("guided by voices", "gold star for robot boy");

    assert(SearchSongPage.songsFound(), 'song results found');
  });

  it('should produce results', function () {
    RoutesPage.makeNewPlaylist();

    SearchSongPage.searchForSong("guided by voices", "gold star for robot boy");

    assert(SearchSongPage.songsFound(), 'song results found');
  });

  it('should add songs', function () {
    util.addSongs(1);

    assert(
      PlaylistPage.getNumSongs() === 1,
      'one song added to setlist'
    );
  });

  it('should should add songs x2', function () {
    util.addSongs(2);

    assert(
      PlaylistPage.getNumSongs() === 2,
      'two songs added to setlist'
    );
  });


});
