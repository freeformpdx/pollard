var assert = require('assert');
var RoutesPage = require('../pages/routesPage');

describe('make new playlist', function() {

  it('should make a new playlist', function () {
    var urlChanged = RoutesPage.makeNewPlaylist();
    assert(urlChanged, 'url changes to setlist/:new_id');
  });

  it('should make a new playlist w/ valid id', function () {
    RoutesPage.makeNewPlaylist();
    var setlistId = RoutesPage.getSetlistIdFromUrl();

    assert(setlistId, 'SetlistID should not be falsy');
    assert(setlistId != 'setlist', 'SetlistID should not be "setlist"');
    assert(setlistId.length === 24, 'SetlistID should be length 24');
  });

  it('should make a new empty playlist', function () {
    RoutesPage.makeNewPlaylist();

    var text = RoutesPage.getNewPlaylistInstructions();
    assert.equal(text,
      '⚡️ Search⚡️ Add Blank Song⚡️' + '\n' +
      '🚀 Build 🎶 Playlist 🚀'
    );
  });

});
