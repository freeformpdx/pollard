var searchSongPage = {
    /**
     * define selectors
     */
    _artistInput:  '#artistSearchInput',
    _titleInput:  '#titleSearchInput',

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
};

module.exports = searchSongPage;
