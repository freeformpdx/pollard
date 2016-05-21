var assert = require('assert');
var util = require('../util');
var PlaylistPage = require('../pages/playlistPage');

describe('drag and drop tests', function() {

  it('can re-order songs', function () {
    util.addSongs(2);
    var firstSongSelector = PlaylistPage.getSongSelectorByCSSIndex(1);
    var secondSongSelector = PlaylistPage.getSongSelectorByCSSIndex(2);
    console.log(firstSongSelector);
    console.log(secondSongSelector);
    browser.dragAndDrop(firstSongSelector, secondSongSelector);
    // browser.debug();
  });

});
