var selectedSongPage = {
    /**
     * define selectors
     */
    _selectedSong:  '#SelectedSong',
    _selectedSongField: '#SelectedSong .label-',
    _deleteButton:  '#SelectedSong .deleteButton',

    /**
     * define functionality
     */

    selectedSongExists: function() {
      browser.waitForExist(this._selectedSong, 5000);
      return true;
    },

    getSelectedSongField: function(field) {
      browser.waitForExist(this._selectedSong, 5000);
      return browser.getValue(this._selectedSongField + field);
    },

    deleteButtonExists: function() {
      browser.waitForExist(this._deleteButton, 5000);
      return true;
    },

    deleteButtonExists: function() {
      browser.waitForExist(this._deleteButton, 5000);
      return true;
    },
};

module.exports = selectedSongPage;
