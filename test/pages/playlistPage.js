var playlistPage = {
    /**
     * define selectors
     */
    _song:  '.song',
    _playButton:  '.playButton',

    /**
     * define functionality
     */
    getAllSongs: function() {
      return browser.elements(this._song).value;
    },

    getAllSongButtons: function() {
      return browser.elements(this._song + ' ' + this._playButton).value;
    },

    getPlayedButtonTextByIndex(index) {
      return browser.elementIdText(this.getAllSongButtons()[index]['ELEMENT']).value;
    },

    playSongByIndex(index) {
      return browser.elementIdClick(this.getAllSongButtons()[index]['ELEMENT']);
    },

};

module.exports = playlistPage;
