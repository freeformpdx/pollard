import React, { Component } from 'react';
import classNames from 'classnames';

import config from '../../env.js';
import mergeStyles from '../lib/mergeStyles';

import AddSong from './AddSong';
import FoundSong from './FoundSong';

export default class SearchSong extends Component {

	constructor(props) {
		super(props);

		let echoNestApiKey = config.ECHO_NEST;
		let sevenDigitalApiKey = config.SEVEN_DIGITAL;

		this.state = {
			trackValue: '',
			artistValue: '',
			isSearching: false,
			noResults: false,
			foundSongs: [],
			echoNestApiKey,
			sevenDigitalApiKey
		};
	}

	//TODO: DRY
	handleArtistChange(event) {
		this.setState({artistValue: event.target.value});
	}

	handleTrackChange(event) {
		this.setState({trackValue: event.target.value});
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
			noResults: false,
			foundSongs: []
		});
	}

	handleSearchClick(event) {
		this.setState({
			isSearching: true,
			foundSongs: []
		});
		let trackSearchUrl = this.getTrackSearchUrl();
		let self = this;
	
		// FETCH TRAX
		fetch(trackSearchUrl)
		.then(function(response) {
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
					noResults: true,
					isSearching: false
				});
			}
		}).catch(function(ex) {
			console.log('parsing failed', ex)
		})
	}
	
	getSongsFromJSON(json) {
		return json.response.songs;
	}

	formatTrackSearch(songsJSON) {
		let formattedTracks = [];

		for ( let i = 0 ; i < songsJSON.length ; i++) {
			let song = songsJSON[i];
			if (song.tracks.length > 0) {
				// FOR RELEASE INFO
				for ( let j = 0; j < song.tracks.length ; j++ ) {
					formattedTracks.push({
						title: song.title,
						artist: song.artist_name,
						foreignReleaseId: song.tracks[j].foreign_release_id,
						album: '',
						date: ''
					});
				}
			} else {
				// FOR NO RELEASE INFO
				formattedTracks.push({
					title: song.title,
					artist: song.artist_name,
					album: '',
					date: ''
				});

			}
		}
		return formattedTracks;
	}


	fetchReleases(songs) {
		// ON FETCH RES, FETCH ALBUM
		let self = this;

		for (let i = 0 ; i < songs.length ; i++) {
			let releaseIdFull = songs[i].foreignReleaseId;

			if (typeof releaseIdFull !== 'undefined') {

				let releaseId = releaseIdFull.split(':')[2];

				let releaseSearchUrl = this.getReleaseSearchUrl(releaseId);

				let myHeaders = new Headers();
				myHeaders.append("Accept", "application/json");
				let myInit = { headers: myHeaders };


				fetch(releaseSearchUrl, myInit)
				.then(function(response) {
					return response.json();
				}).then(function(json) {
					self.setState(function(previousState) {

						let foundSongs = previousState.foundSongs;
						let updatedFoundSong = Object.assign(foundSongs[i], {
							album: json.name ? json.name : 'No Spotify Album Info',
							date: json.release_date,
							img300px: json.images[1].url,
							img64px: json.images[2].url,
							label: json.copyrights[0] ? json.copyrights[0].text : ''
						});

						foundSongs[i] = updatedFoundSong;

						return {
							foundSongs
						};
					});
					self.setState({isSearching: false});
				});

			}
		}
	}

	getTrackSearchUrl() {
		const url = "http://developer.echonest.com/api/v4/song/search?" +
			"api_key=" + this.state.echoNestApiKey +
			"&title=" + this.state.trackValue +
			"&artist=" + this.state.artistValue +
			"&bucket=id:spotify-WW&bucket=audio_summary&bucket=tracks";
		return url;
	}

	getReleaseSearchUrl(releaseId) {
		// TODO: convert this to several
		const url = "https://api.spotify.com/v1/albums/" + releaseId;
		return url;
	}

  render() {
		let searchStyle = mergeStyles({
			backgroundColor: '#F6EBFA'
		});


		var artistValue = this.state.artistValue;
		var trackValue = this.state.trackValue;

		let foundSongsComponents = false;
		if (this.state.foundSongs.length > 0) {
			foundSongsComponents = this.state.foundSongs.map((foundSong, idx) =>
				<FoundSong
					key={ idx }
					song={ foundSong }
					onClearSongs={ () => this.handleClearSongs() }
					onAddSong={ this.props.onAddSong } />
			);
		} else if (this.state.noResults) {
			foundSongsComponents = (
				<li className="list-group-item list-group-item-danger">No search results found 😈 💩 💯 </li>
			);
		}


    return (
			<div>
				<li
					className="list-group-item clearfix"
					style={ searchStyle }>
						<div className="col-xs-12 col-sm-3">
								<input
									className="form-control"
									type="text"
									placeholder="artist"
									value={ artistValue }
									onKeyPress={ (e) => this.handleKeyPress(e) }
									onChange={ (e) => this.handleArtistChange(e) }/>
						</div>
						<div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
						<div className="col-xs-12 col-sm-3">
								<input
									type="text"
									className="form-control"
									placeholder="track"
									value={ trackValue }
									onKeyPress={ (e) => this.handleKeyPress(e) }
									onChange={ (e) => this.handleTrackChange(e) }/>
						</div>
						<div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
						<button
							type="button"
							className="btn btn-primary col-xs-10 col-xs-offset-1 col-sm-2 col-sm-offset-1"
							onClick={ (e) => this.handleSearchClick(e) }>
							<span
								className="glyphicon glyphicon-search"
								aria-hidden="true"></span> {this.state.isSearching?'Searching...':'Search'}
						</button>
						<div className="visible-xs-block col-xs-12" style={{ marginTop: 5 }} />
						<AddSong onAddSong={ this.props.onAddSong } />
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
