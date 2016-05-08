var assert = require('assert');
var RoutesPage = require('../pages/routesPage');
var SearchSongPage = require('../pages/searchSongPage');

describe('search song tests', function() {

  it('should add artist input to songSearch', function () {
    RoutesPage.makeNewPlaylist();

    var artistInput = "guided by voices";

    SearchSongPage.inputArtist(artistInput);

    assert(
      SearchSongPage.getArtistInput() == artistInput,
      'artist input should accept input'
    );

  });

  it('should add title input to songSearch', function () {
    RoutesPage.makeNewPlaylist();

    var titleInput = "guided by voices";

    SearchSongPage.inputTitle(titleInput);

    assert(
      SearchSongPage.getTitleInput() == titleInput,
      'title input should accept input'
    );

  });

});
