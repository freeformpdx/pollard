var playlistPage = {
    /**
     * define selectors
     */
    _song:  '.song',
    _playButton:  '.playButton',
    _singleLineTitle: '.singleLineTitle',

    /**
     * define functionality
     */
    getAllSongEls: function() {
      return browser.elements(this._song).value;
    },

    getSongElByIndex: function(index) {
      return this.getAllSongEls()[index]['ELEMENT']
    },

    getNumSongs: function() {
      return browser.elements(this._song).value.length;
    },

    getAllSongButtonEls: function() {
      return browser.elements(this._song + ' ' + this._playButton).value;
    },

    getSongButtonElByIndex: function(index) {
      return this.getAllSongButtonEls()[index]['ELEMENT'];
    },

    getPlayedButtonTextByIndex(index) {
      return browser.elementIdText(this.getSongButtonElByIndex(index)).value;
    },

    playSongByIndex(index) {
      return browser.elementIdClick(this.getSongButtonElByIndex(index));
    },

    isSongSelected: function(index) {
      return (
        browser.elementIdAttribute(
          this.getSongElByIndex(index),
          'id'
        ).value === 'SelectedSong'
      );
    },

};

module.exports = playlistPage;
