var playlistPage = {
    /**
     * define selectors
     */
    _song:  '.song',
    _playButton:  '.playButton',

    /**
     * define selector functions
     */
     _songNthChild: function(index) {
      return this._song + ':nth-child('+index+')';
     },

    /**
     * define functionality
     */

    getPlayedButtonTextByCSSIndex: function(index) {
      return browser
        .getText(this._songNthChild(index) + ' ' + this._playButton);
    },

    playSongByCSSIndex: function(index) {
      return browser
        .click(this._songNthChild(index) + ' ' + this._playButton);
    },

    getAllSongs: function() {
      return browser.elements(this._song).value;
    }
};

module.exports = playlistPage;
