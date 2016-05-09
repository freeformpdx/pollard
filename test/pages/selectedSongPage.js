var selectedSongPage = {
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
    },

    getSelectedSongField: function(field) {
      browser.waitForExist(this._selectedSong, 5000);
      return browser.getValue(this._selectedSong + ' .label-' + field);
    },
};

module.exports = selectedSongPage;
