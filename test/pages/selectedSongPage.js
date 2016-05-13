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

    deleteButtonDoesNotExist: function() {
      return !browser.isExisting(this._deleteButton);
    },

    clickDeleteButton: function() {
      browser.waitForExist(this._deleteButton, 5000);
      browser.click(this._deleteButton);
    },

    getDeleteButtonText: function() {
      browser.waitForExist(this._deleteButton, 5000);
      return browser.getText(this._deleteButton);
    },
};

module.exports = selectedSongPage;
