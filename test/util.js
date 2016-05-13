var RoutesPage = require('./pages/routesPage');
var SearchSongPage = require('./pages/searchSongPage');
var SelectedSongPage = require('./pages/selectedSongPage');
var testSongs = require('./testSongs.json');

function getRandomSong() {
  var numTestSongs = testSongs.length;
  var index = Math.floor(Math.random() * numTestSongs);
  return testSongs[index];
}

var util = {
  addSongs: function(numSongs) {
    RoutesPage.makeNewPlaylist();
    for (var i = 0; i < numSongs; i++) {
      var song = getRandomSong();
      SearchSongPage.searchForSong(song[0], song[1]);
      SearchSongPage.addSongToPlaylist();
    }
  },
}

module.exports = util;
