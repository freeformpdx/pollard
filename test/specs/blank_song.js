var assert = require('assert');

var RoutesPage = require('../pages/routesPage');
var SearchSongPage = require('../pages/searchSongPage');
var SelectedSongPage = require('../pages/selectedSongPage');
var BlankSongPage = require('../pages/blankSongPage');

describe('blank song tests', function() {
  it('should add blank song', function () {
    RoutesPage.makeNewPlaylist();

    BlankSongPage.clickAddBlankSongButton();

    assert(SelectedSongPage.selectedSongExists(), 'song added to setlist');
  });

  it('added blank song should be blank', function () {
    RoutesPage.makeNewPlaylist();

    BlankSongPage.clickAddBlankSongButton();

    assert(
      SelectedSongPage.getSelectedSongField('title') == '',
      'title should be blank'
    );
    assert(
      SelectedSongPage.getSelectedSongField('artist') == '',
      'artist should be blank'
    );
  });

  it('should pre-fill blank song w/ current inputs', function () {
    RoutesPage.makeNewPlaylist();

    var title = 'test title';
    var artist = 'test artist';

    SearchSongPage.inputTitle(title);
    SearchSongPage.inputArtist(artist);

    BlankSongPage.clickAddBlankSongButton();

    assert(
      SelectedSongPage.getSelectedSongField('title') == title,
      'title should be pre-filled'
    );
    assert(
      SelectedSongPage.getSelectedSongField('artist') == artist,
      'artist should be pre-filled'
    );
  });

  it('after bad search, should pre-fill blank song w/ current inputs', function () {
    RoutesPage.makeNewPlaylist();

    var title = 'test title sanotehu';
    var artist = 'test artist asnotebu';

    SearchSongPage.inputTitle(title);
    SearchSongPage.inputArtist(artist);

    SearchSongPage.clickSearchButton();

    BlankSongPage.clickAddBlankSongButton();

    assert(
      SelectedSongPage.getSelectedSongField('title') == title,
      'title should be pre-filled'
    );
    assert(
      SelectedSongPage.getSelectedSongField('artist') == artist,
      'artist should be pre-filled'
    );
  });

});
