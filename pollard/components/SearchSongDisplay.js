import React, { Component } from 'react';
import classNames from 'classnames';

import config from '../../env.js';
import mergeStyles from '../lib/mergeStyles';

import AddSong from './AddSong';
import FoundSong from './FoundSong';
import SearchInput from './SearchInput';
import SearchSongButton from './SearchSongButton';
import XSSeparator from './XSSeparator';

export default class SearchSongDisplay extends Component {

  constructor(props) {
    super(props);

    let echoNestApiKey = config.ECHO_NEST;

    this.state = {
      trackValue: '',
      artistValue: '',
      isSearching: false,
      foundSongs: [],
      error: null,
      echoNestApiKey,
    };
  }

  //TODO: DRY
  handleArtistChange(e) {
    this.setState({artistValue: e.target.value});
    this.props.artistChange(e.target.value);
  }

  setError(error) {
    this.setState({
      error,
    });
  }

  handleTitleChange(e) {
    this.setState({trackValue: e.target.value});
    this.props.titleChange(e.target.value);
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      this.handleSearchClick();
    }
    return event;
  }

  handleClearSongs() {
    this.setState({
      trackValue: '',
      artistValue: '',
      isSearching: false,
      foundSongs: [],
      error: null,
    });
    this.props.clearSearchSongInputs();
  }

  handleSearchClick(event) {
    if (!this.state.artistValue || !this.state.trackValue) {
      this.setState({
        error: 'Search needs title && artist',
      });
      return;
    }
    this.setState({
      isSearching: true,
      foundSongs: []
    });
    let trackSearchUrl = this.getTrackSearchUrl();
    let self = this;

    // update redux state
    this.props.searchSong(
      this.state.artistValue,
      this.state.trackValue,
    );

    // FETCH TRAX
    fetch(trackSearchUrl)
    .then(function(response) {
      if (!response.ok) {
        const errMsg = "Search server (EchoNest) down :( Try again?";
        self.setError(errMsg);
        throw Error(errMsg);
      }
      return response.json();
    }).then(function(json) {
      // On TRAX response: add songs to state
      let songs = self.formatTrackSearch(self.getSongsFromJSON(json));
      if (songs.length > 0 ) {
        self.setState({
          foundSongs: songs
        });
        // Then, fetch release data from songs
        self.fetchReleases(songs);
      } else {
        self.setState({
          error: 'No search results found :(',
          isSearching: false
        });
      }
    }).catch(function(ex) {
      console.log('Fetching Tracks Failed: ', ex)
    })
  }

  getSongsFromJSON(json) {
    return json.tracks.items;
  }

  formatTrackSearch(songsJSON) {
    let formattedTracks = [];

    for ( let i = 0 ; i < songsJSON.length ; i++) {
      let song = songsJSON[i];
      formattedTracks.push({
        title: song.name,
        artist: song.artists[0].name,
        releaseId: song.album.id,
        album: song.album.name,
        date: ''
      });
    }
    return formattedTracks;
  }


  fetchReleases(songs) {
    // ON FETCH RES, FETCH ALBUM
    let self = this;
    let releaseIds = [];
    for (let i = 0 ; i < songs.length ; i++) {
      let releaseId = songs[i].releaseId;
      if (typeof releaseId !== 'undefined') {
        releaseIds.push(releaseId);
      }
    }

    let releaseSearchUrl = this.getReleaseSearchUrl(releaseIds);

    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    let myInit = { headers: myHeaders };


    fetch(releaseSearchUrl, myInit)
    .then(function(response) {
      if (!response.ok) {
        const errMsg = "Search server (Spotify) down :( Try again?";
        self.setError(errMsg);
        throw Error(errMsg);
      }
      return response.json();
    }).then(function(json) {
      /* update state */
      for (let i = 0 ; i < songs.length ; i++) {
        let releaseId = songs[i].releaseId;
        if (typeof releaseId !== 'undefined') {
          const releaseInfo = self.getReleaseInfo(releaseId, json);
          if (releaseInfo) {
            self.setState(function(previousState) {
              let foundSongs = previousState.foundSongs;
              let updatedFoundSong = Object.assign(foundSongs[i], {
                date: releaseInfo.date,
                img300px: releaseInfo.img300px,
                img64px: releaseInfo.img64px,
                label: releaseInfo.label
              });

              foundSongs[i] = updatedFoundSong;

              return {
                foundSongs
              };
            });
          }
        }
      }
      self.setState({isSearching: false});
    }).catch(function(ex) {
      console.log('Fetching Releases Failed: ', ex)
    });
  }

  getReleaseInfo(releaseId, json) {
    const albums = json.albums;
    for (let i = 0; i < albums.length; i++) {
      const album = albums[i];
      if (album.id == releaseId) {
        return {
          date: album.release_date,
          img300px: album.images[1].url,
          img64px: album.images[2].url,
          label: album.copyrights[0] ? album.copyrights[0].text : ''
        };
      }
    }
  }

  getTrackSearchUrl() {
    const url = "https://api.spotify.com/v1/search?" +
      "q=" + encodeURIComponent(this.state.artistValue) + "%20" +
      encodeURIComponent(this.state.trackValue) +
      "&type=track";

    return url;
  }

  getReleaseSearchUrl(releaseIds) {
    // TODO: convert this to several
    const url = "https://api.spotify.com/v1/albums/?ids=" + releaseIds.join(',');
    return url;
  }

  render() {
    let searchStyle = mergeStyles({
      backgroundColor: '#D0D0D0'
    });


    var artistValue = this.state.artistValue;
    var trackValue = this.state.trackValue;

    let foundSongsComponents = false;
    if (this.state.foundSongs.length > 0) {
      foundSongsComponents = this.state.foundSongs.map((foundSong, idx) =>
        <FoundSong
          key={ idx }
          song={ foundSong }
          clearSongs={ () => this.handleClearSongs() }
          addSong={ this.props.addSong } />
      );
    } else if (this.state.error) {
      foundSongsComponents = (
        <li className="list-group-item list-group-item-danger"> {this.state.error} 😈 💩 💯 </li>
      );
    }


    return (
      <div>
        <li
          className="list-group-item clearfix"
          style={ searchStyle }>

            <SearchInput
              type="artist"
              value={ artistValue }
              onKeyPress={ (e) => this.handleKeyPress(e) }
              onChange={ (e) => this.handleArtistChange(e) }/>

            <XSSeparator />

            <SearchInput
              type="title"
              value={ trackValue }
              onKeyPress={ (e) => this.handleKeyPress(e) }
              onChange={ (e) => this.handleTitleChange(e) }/>

            <div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />

            <SearchSongButton
              isDragging={ this.state.isDragging }
              onClick={ (e) => this.handleSearchClick(e) }/>

            <div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />

            <AddSong
              lastSearchedSong={ this.props.lastSearchedSong }
              clearSongs={ () => this.handleClearSongs() }
              addSong={ this.props.addSong }/>
        </li>
        { (foundSongsComponents) ?
          <li
            className="list-group-item"
            style={ searchStyle }>
            <ul className="list-group">
              { foundSongsComponents }
            </ul>
          </li>
          : ''
        }
      </div>
    );
  }

}
