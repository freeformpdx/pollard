var searchSongPage = {
    /**
     * define selectors
     */
    _artistInput:  '#artistSearchInput',
    _titleInput:  '#titleSearchInput',
    _searchSongButton:  '#SearchSongButton',
    _foundSong: '.foundSong',
    _addFoundSong: '.addFoundSong',

    /**
     * define functionality
     */
    inputArtist: function(artistInput) {
      browser.setValue(this._artistInput, artistInput);
    },

    getArtistInput: function() {
      return browser.getValue(this._artistInput);
    },

    inputTitle: function(titleInput) {
      browser.setValue(this._titleInput, titleInput);
    },

    getTitleInput: function() {
      return browser.getValue(this._titleInput);
    },

    clickSearchButton: function() {
      browser.click(this._searchSongButton);
    },

    songsFound: function() {
      browser.waitForExist(this._foundSong, 5000);
      return true;
    },

    addSongToPlaylist: function() {
      this.songsFound();
      browser.click(this._addFoundSong);
    },

    searchForSong: function(artist, title) {
      this.inputArtist(artist);
      this.inputTitle(title);
      this.clickSearchButton();
    },

};

module.exports = searchSongPage;
