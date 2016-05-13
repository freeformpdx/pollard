var assert = require('assert');
var util = require('../util.js');
var SelectedSongPage = require('../pages/selectedSongPage');

describe('delete song tests', function() {

  it('delete song button should exist', function () {
    util.addSongs(1);

    assert(
      SelectedSongPage.deleteButtonExists(),
      'delete button should exist'
    );

  });

  it('should default to delete button initial state', function () {

    util.addSongs(1);
    assert(
      SelectedSongPage.getDeleteButtonText() === 'Delete',
      'delete button should default to initial state'
    );
  });

  it('should prompt for delete confirmation', function () {
    util.addSongs(1);
    SelectedSongPage.clickDeleteButton();

    assert(
      SelectedSongPage.getDeleteButtonText() === 'Confirm',
      'delete button should prompt for confirmation'
    );

  });

  it('should delete the song', function () {
    util.addSongs(1);
    SelectedSongPage.clickDeleteButton();
    SelectedSongPage.clickDeleteButton();


    assert(
      SelectedSongPage.deleteButtonDoesNotExist(),
      "delete button shouldn't exist"
    );

  });

});
