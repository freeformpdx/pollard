var assert = require('assert');
var RoutesPage = require('../pages/routesPage');
var SearchSongPage = require('../pages/searchSongPage');
var SelectedSongPage = require('../pages/selectedSongPage');

describe('delete song tests', function() {

  it('delete song button should exist', function () {
    RoutesPage.makeNewPlaylist();
    SearchSongPage.searchForSong("guided by voices", "gold star for robot boy");
    SearchSongPage.addSongToPlaylist();


  });

});
