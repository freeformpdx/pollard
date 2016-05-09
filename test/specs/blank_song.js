var assert = require('assert');

var RoutesPage = require('../pages/routesPage');
var SearchSongPage = require('../pages/searchSongPage');
var SetlistPage = require('../pages/setlistPage');
var BlankSongPage = require('../pages/blankSongPage');

describe('blank song tests', function() {
  it('should add blank song', function () {
    RoutesPage.makeNewPlaylist();

    BlankSongPage.clickAddBlankSongButton();

    assert(SetlistPage.selectedSongExists(), 'song added to setlist');
  });

  it('added blank song should be blank', function () {
    RoutesPage.makeNewPlaylist();

    BlankSongPage.clickAddBlankSongButton();

    assert(
      SetlistPage.getSelectedSongField('title') == '',
      'title should be blank'
    );
    assert(
      SetlistPage.getSelectedSongField('artist') == '',
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
      SetlistPage.getSelectedSongField('title') == title,
      'title should be pre-filled'
    );
    assert(
      SetlistPage.getSelectedSongField('artist') == artist,
      'artist should be pre-filled'
    );
  });

});
