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
});
