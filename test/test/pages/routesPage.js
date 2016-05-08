var routesPage = {
    /**
     * define selectors
     */
    _myPlaylistLink:  '#MyPlaylist',

    /**
     *
     */
    makeNewPlaylist: function() {
      browser.url(process.env.HOST);
      browser.click(this._myPlaylistLink);

      // wait for redirect to setlist/:id
      var currentUrl = browser.getUrl()
      return browser.waitUntil(function() {
        return browser.getUrl().then(function (url) {
          return url !== currentUrl;
        });
      })
    },

    getNewPlaylistInstructions: function() {
      return browser.getText('#NewPlaylistInstructions');
    },

    getSetlistIdFromUrl: function() {
      var url = browser.getUrl();
      var urlPieces = url.split('/');
      return urlPieces[urlPieces.length-1];
    },

};

module.exports = routesPage;
