var assert = require('assert');
var RoutesPage = require('../pages/routesPage');
var SearchSongPage = require('../pages/searchSongPage');
var SelectedSongPage = require('../pages/selectedSongPage');

describe('delete song tests', function() {

  it('delete song button should exist', function () {
    RoutesPage.makeNewPlaylist();
    SearchSongPage.searchForSong("guided by voices", "gold star for robot boy");
    SearchSongPage.addSongToPlaylist();

    assert(
      SelectedSongPage.deleteButtonExists(),
      'delete button should exist'
    );

  });

  it('should default to delete button initial state', function () {
    RoutesPage.makeNewPlaylist();
    SearchSongPage.searchForSong("guided by voices", "gold star for robot boy");
    SearchSongPage.addSongToPlaylist();

    assert(
      SelectedSongPage.getDeleteButtonText() === 'Delete',
      'delete button should default to initial state'
    );
  });

  it('should prompt for delete confirmation', function () {
    RoutesPage.makeNewPlaylist();
    SearchSongPage.searchForSong("guided by voices", "gold star for robot boy");
    SearchSongPage.addSongToPlaylist();
    SelectedSongPage.clickDeleteButton();

    assert(
      SelectedSongPage.getDeleteButtonText() === 'Confirm',
      'delete button should prompt for confirmation'
    );

  });

  it('should delete the song', function () {
    RoutesPage.makeNewPlaylist();
    SearchSongPage.searchForSong("guided by voices", "gold star for robot boy");
    SearchSongPage.addSongToPlaylist();
    SelectedSongPage.clickDeleteButton();
    SelectedSongPage.clickDeleteButton();


    assert(
      SelectedSongPage.deleteButtonDoesNotExist(),
      "delete button shouldn't exist"
    );

  });

});
