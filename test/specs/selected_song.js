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

  it('selected song should have editable title field', function () {
    util.addSongs(1);
    editableFieldTest('title');
  });

  it('selected song should have editable artist field', function () {
    util.addSongs(1);
    editableFieldTest('artist');
  });

  it('selected song should have editable album field', function () {
    util.addSongs(1);
    editableFieldTest('album');
  });

  it('selected song should have editable label field', function () {
    util.addSongs(1);
    editableFieldTest('label');
  });

  it('selected song should have editable year field', function () {
    util.addSongs(1);
    editableFieldTest('year');
  });

  it('selected song should have editable notes field', function () {
    util.addSongs(1);
    editableFieldTest('notes');
  });

});

function editableFieldTest(field) {
  var testInput = SelectedSongPage.getSelectedSongField(field) + 'test';

  SelectedSongPage.setSelectedSongField(field, testInput);

  assert (
    SelectedSongPage.getSelectedSongField(field) == testInput,
    field + ' input should be editable'
  );
}
