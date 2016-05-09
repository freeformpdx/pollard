var blankSongPage = {
    /**
     * define selectors
     */
    _blankSongButton:  '#AddSong',

    /**
     * define functionality
     */

    clickAddBlankSongButton: function() {
      browser.click(this._blankSongButton);
    },
};

module.exports = blankSongPage;
