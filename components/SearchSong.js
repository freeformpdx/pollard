import React, { Component } from 'react';
//import fetch from 'whatwg-fetch';
import classNames from 'classnames';

import secrets from '../secrets';
import mergeStyles from '../lib/mergeStyles';

import AddSong from './AddSong';
import FoundSong from './FoundSong';

export default class SearchSong extends Component {

	constructor(props) {
		super(props);

		let echoNestApiKey = secrets().echoNest;
		let sevenDigitalApiKey = secrets().sevenDigital;

		this.state = {
			trackValue: '',
			artistValue: '',
			isSearching: false,
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

	handleClearSongs() {
		this.setState({
			trackValue: '',
			artistValue: '',
			isSearching: false,
			foundSongs: []
		});
	}

	handleSearchClick(event) {
		this.setState({isSeraching: true});
		let trackSearchUrl = this.getTrackSearchUrl();
		let self = this;
	
		// FETCH TRAX
		fetch(trackSearchUrl)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			// On TRAX response: add songs to state
			let songs = self.formatTrackSearch(self.getSongsFromJSON(json));
			self.setState({
				foundSongs: songs,
				isSearching: false
			});
			// Then, fetch release data from songs
			self.fetchReleases(songs);
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
				// FOR 7DIGITAL INFO
				for ( let j = 0; j < song.tracks.length ; j++ ) {
					formattedTracks.push({
						title: song.title,
						artist: song.artist_name,
						foreignReleaseId: song.tracks[j].foreign_release_id,
						album: '',
						date: '',
						img: song.tracks[j].release_image,
					});
				}
			} else {
				// FOR NO 7DIGITAL INFO
				formattedTracks.push({
					title: song.title,
					artist: song.artist_name,
					album: '',
					date: '',
					img: '',
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
						if (typeof json.release == 'undefined') {
							console.log('Error finding releaseInfo:');
							console.log(JSON.stringify(json));
						} else {
							let updatedFoundSong = Object.assign(foundSongs[i], {
								album: json.release.title ? json.release.title : 'nothing',
								date: json.release.year,
								img: json.release.image
							});

							foundSongs[i] = updatedFoundSong;
						}

						return {
							foundSongs
						};
					});
				});
			}
		}
	}

	getTrackSearchUrl() {
		return "http://developer.echonest.com/api/v4/song/search?" +
			"api_key=" + this.state.echoNestApiKey +
			"&title=" + this.state.trackValue +
			"&artist=" + this.state.artistValue +
			"&bucket=id:7digital-US&bucket=audio_summary&bucket=tracks";
	}

	getReleaseSearchUrl(releaseId) {
		return "http://api.7digital.com/1.2/release/details" +
			"?releaseid=" + releaseId +
			"&oauth_consumer_key=" + this.state.sevenDigitalApiKey;
	}

  render() {
		let searchStyle = mergeStyles({
			backgroundColor: '#F6EBFA'
		});


		var artistValue = this.state.artistValue;
		var trackValue = this.state.trackValue;

		let foundSongsComponents = this.state.foundSongs.map((foundSong, idx) =>
			<FoundSong
				key={ idx }
				song={ foundSong }
				onClearSongs={ () => this.handleClearSongs() }
				onAddSong={ this.props.onAddSong } />
		);


    return (
			<div>
				<li
					className="list-group-item clearfix"
					style={ searchStyle }>
							<form className="form-inline">
								<input
									className="form-control col-xs-5 col-sm-2"
									type="text"
									placeholder="artist"
									value={ artistValue }
									onChange={ (e) => this.handleArtistChange(e) }/>
								<input
									type="text"
									className="form-control col-xs-5 col-sm-2 col-sm-offset-1"
									placeholder="track"
									value={ trackValue }
									onChange={ (e) => this.handleTrackChange(e) }/>
								<button 
									type="button"
									className="btn btn-primary col-xs-12 col-sm-2 col-sm-offset-1"
									onClick={ (e) => this.handleSearchClick(e) }>
									<span
										className="glyphicon glyphicon-search"
										aria-hidden="true"></span> Search
								</button>
							</form>
							<AddSong onAddSong={ this.props.onAddSong } />
				</li>
				{ (this.state.foundSongs.length > 0) ?
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
