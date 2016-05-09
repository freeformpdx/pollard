var assert = require('assert');
var RoutesPage = require('../pages/routesPage');
var SearchSongPage = require('../pages/searchSongPage');
var SelectedSongPage = require('../pages/selectedSongPage');

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

  it('should produce addable results', function () {
    RoutesPage.makeNewPlaylist();

    SearchSongPage.searchForSong("guided by voices", "gold star for robot boy");
    SearchSongPage.addSongToPlaylist();

    assert(SelectedSongPage.selectedSongExists(), 'song added to setlist');
  });

  it('should produce addable results x2', function () {
    RoutesPage.makeNewPlaylist();

    SearchSongPage.searchForSong("guided by voices", "gold star for robot boy");
    SearchSongPage.addSongToPlaylist();

    assert(SelectedSongPage.selectedSongExists(), 'song added to setlist');

    SearchSongPage.searchForSong("guided by voices", "valuable hunting knife");
    SearchSongPage.addSongToPlaylist();

    assert(SelectedSongPage.selectedSongExists(), 'second song added to setlist');
  });


});
