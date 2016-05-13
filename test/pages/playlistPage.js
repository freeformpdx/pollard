var playlistPage = {
    /**
     * define selectors
     */
    _song:  '.song',

    /**
     * define functionality
     */

    getPlayedButtonTextByIndex: function(index) {
      return browser.selectByIndex(this._song,index).getText();
    },
};

module.exports = playlistPage;
