var assert = require('assert');
var util = require('../util');
var SelectedSongPage = require('../pages/selectedSongPage');
var PlaylistPage = require('../pages/playlistPage');

describe('selected song tests', function() {

  it('latest song should be selected', function () {
    util.addSongs(2);

    assert(
      PlaylistPage.isSongSelected(0),
      'Latest song is selected'
    );
  });

  it('earlier song should not be selected', function () {
    util.addSongs(2);

    assert(
      !PlaylistPage.isSongSelected(1),
      'Earlier song is not selected'
    );
  });

});
