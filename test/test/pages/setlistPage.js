var setlistPage = {
    /**
     * define selectors
     */
    _selectedSong:  '#SelectedSong',

    /**
     * define functionality
     */

    selectedSongExists: function() {
      browser.waitForExist(this._selectedSong, 5000);
      return true;
    }
};

module.exports = setlistPage;
