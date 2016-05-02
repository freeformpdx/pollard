import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import config from '../../env.js';
import {
	addSong
} from '../actions/Actions.js';

class AdvancedSearch extends Component {
	// REACTY STUFF

	constructor(props) {
		super(props);

		let echoNestApiKey = config.ECHO_NEST;
		let discogsApiKey = config.DISCOGS;
		let sevenDigitalApiKey = config.SEVEN_DIGITAL;

		this.state = {
			trackValue: '',
			artistValue: '',
			isSearching: false,
			noResults: false,
			searchResults: {},
			echoNestApiKey,
			discogsApiKey,
			sevenDigitalApiKey
		};
	}


	// NON REACTY STUFF

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
			searchResults: {}
		});
	}

	handleSearchClick(event) {
		this.setState({
			isSearching: true,
			searchResults: {}
		});
		let releaseInfoServices = ['spotify-WW', 'discogs']

		this.getTracks(releaseInfoServices);

	}

	getTracks(releaseInfoServices) {
		releaseInfoServices.map((releaseInfoService) => {
			// Prep track search fetch
			let trackSearchUrl = this.getTrackSearchUrl(releaseInfoService);
			let self = this;

			fetch(trackSearchUrl)
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				// Track Search Call returned, clean data and add to state
				let songs = self.formatTrackSearch(self.getSongsFromJSON(json));

				if (songs.length > 0 ) {
					let searchResults = self.state.searchResults;

					searchResults[releaseInfoService] = songs;

					self.setState({searchResults});
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
	)}
	
	getSongsFromJSON(json) {
		return json.response.songs;
	}

	formatTrackSearch(songsJSON) {
		let formattedTracks = [];

		for ( let i = 0 ; i < songsJSON.length ; i++) {
			let song = songsJSON[i];
			if (song.tracks.length > 0) {
				let track = {
					title: song.title,
					artist: song.artist_name,
					releases: []
				}
				for ( let j = 0; j < song.tracks.length ; j++ ) {
					track.releases.push({
						foreignReleaseId: song.tracks[j].foreign_release_id
					});
				}
				formattedTracks.push(track);
			}
		}
		return formattedTracks;
	}

	fetchReleasesForService(releaseInfoService, songIdx) {
		const songs = this.state.searchResults[releaseInfoService][songIdx];

		const idxsToFetch = this.getIdxsToFetch(songs);

		this.runFetchOnServiceSubset(releaseInfoService, songIdx, idxsToFetch);
	}

	getIdxsToFetch(songs) {
		// get sparse array of idxs w/ foreign release id still set
		const sparseIdxsToFetch = songs.releases.map((value, idx) => {
			if (value.foreignReleaseId) {
				return idx;
			} else {
				return null;
			}
		});

		// reduce sparse array to dense array
		const denseIdxsToFetch = sparseIdxsToFetch.reduce((prev, cur) => {
			if (cur !== null) {
				prev.push(cur);
			}
			return prev;
		},[]);

		// LIMITED SUBSET FOR TESTING REMOVE THIS SHIT FOR RELAY
		// VVVVVVVVV
		return denseIdxsToFetch.slice(0,2);
		// ^^^^^^^^^
		// LIMITED SUBSET FOR TESTING REMOVE THIS SHIT FOR RELAY
		
	}

	runFetchOnServiceSubset(releaseInfoService, songIdx, idxsToFetch) {
		// Fetches release info for all idxs to fetch
		for (let i = 0 ; i < idxsToFetch.length ; i++) {
			const releaseIdx = idxsToFetch[i];
			let song = this.state.searchResults[releaseInfoService][songIdx]['releases'][releaseIdx];

			const foreignReleaseId = song.foreignReleaseId;
			const releaseId = foreignReleaseId.split(':')[2];

			const releaseSearchUrl = this.getReleaseSearchUrl(releaseInfoService, releaseId);

			let myHeaders = new Headers();
			myHeaders.append("Accept", "application/json");
			myHeaders.append("User-Agent", "Pollard/0.1 +https://github.com/spencerliechty/pollard");
			let myInit = { headers: myHeaders };

			fetch(releaseSearchUrl, myInit)
			.then((response) => {
				return response.json();
			}).then((json) => {
				// On results, format search results
				const formattedSong = this.formatReleaseSearchResults(releaseInfoService, json);

				// Plug back into search results and set state
				let searchResults = this.state.searchResults;
				searchResults[releaseInfoService][songIdx]['releases'][releaseIdx] = formattedSong;

				this.setState({
					isSearching: false,
					searchResults
				});
			});

		}
	}

	formatReleaseSearchResults(releaseInfoService, result) {
		switch (releaseInfoService) {
		case "spotify-WW":
			return {
				album: result.name ? result.name : 'No Spotify Album Info',
				date: result.release_date,
				label: result.copyrights[0] ? result.copyrights[0].text : '',
				img300px: result.images[1].url,
				img64px: result.images[2].url
			};
		case "discogs":
			return {
				album: result.title || 'No Discogs Album Info',
				date: result.year || '',
				label: result.labels[0] ? result.labels[0].name : '',
				img300px: result.thumb || '',
				img64px: result.thumb || ''
			};
		}
	}

	getTrackSearchUrl(releaseInfoService) {
			return "http://developer.echonest.com/api/v4/song/search?" +
				"api_key=" + this.state.echoNestApiKey +
				"&title=" + this.state.trackValue +
				"&artist=" + this.state.artistValue +
				"&bucket=id:" + releaseInfoService + "&bucket=audio_summary&bucket=tracks";
	}

	getReleaseSearchUrl(releaseInfoService, releaseId) {
		switch (releaseInfoService) {
		case "spotify-WW":
			return "https://api.spotify.com/v1/albums/" + releaseId;
		case "discogs":
			return "https://api.discogs.com/releases/" + releaseId + "?token=" + this.state.discogsApiKey;
		}
	}


  render() {

		var artistValue = this.state.artistValue;
		var trackValue = this.state.trackValue;


		let searchResultsComponents = [];
		let srcKey = 0;
		if (Object.keys(this.state.searchResults).length > 0) {
			for (let releaseService in this.state.searchResults) {
				const songs = this.state.searchResults[releaseService].map((foundSong, songIdx) => {
					const releases = foundSong.releases.map((release, releaseIdx) => {
						if (!release.foreignReleaseId) {
							return (
								<div key={ releaseIdx }>
									<div className="col-xs-12" >
										{ release.album }<br/>
										{ release.label }<br/>
										{ release.date }
									</div>
									<div className="col-xs-12">
										<img style={{maxWidth: 100}} src={release.img300px}/>
									</div>
								</div>
							);
						}
					});
					const releaseCount = releases.reduce((prev, curr) => {
						if (curr) {
							prev++;
						}
						return prev;
					},0);
					return (
						<div
							key={ songIdx }
							style={{border: '1px solid black'}}
							className="col-xs-12">
							<div className="col-xs-12">
								<h4>{ foundSong.title }&nbsp;-&nbsp;{ foundSong.artist }</h4>
							</div>
							{ releases.length > 0 ? releases : '' }
							<button
								className="col-xs-12"
								onClick={ (e) => this.fetchReleasesForService(releaseService, songIdx) }>
								Load Releases ({ foundSong.releases.length -  releaseCount })
							</button>
						</div>
					);
				});
				searchResultsComponents.push(
				<div
					key={ srcKey }
					className="col-xs-12 col-sm-6">
					<h3>{ releaseService }</h3>
					{ songs }
				</div>);
				srcKey++;
			}
		} else if (this.state.noResults) {
			searchResultsComponents.push(
				<li key={ srcKey } className="list-group-item list-group-item-danger">No search results found 😈 💩 💯 </li>
			);
		}


    return (
			<div>
				<li className="list-group-item clearfix">
						<div className="col-xs-12 col-sm-3">
								<input
									className="form-control"
									type="text"
									placeholder="artist"
									value={ artistValue }
									onKeyPress={ (e) => this.handleKeyPress(e) }
									onChange={ (e) => this.handleArtistChange(e) }/>
						</div>
						<div className="visible-xs-block col-xs-12" />
						<div className="col-xs-12 col-sm-3">
								<input
									type="text"
									className="form-control"
									placeholder="track"
									value={ trackValue }
									onKeyPress={ (e) => this.handleKeyPress(e) }
									onChange={ (e) => this.handleTrackChange(e) }/>
						</div>
						<div className="visible-xs-block col-xs-12" />
						<button
							type="button"
							className="btn btn-primary col-xs-10 col-xs-offset-1 col-sm-2 col-sm-offset-1"
							onClick={ (e) => this.handleSearchClick(e) }>
							<span
								className="glyphicon glyphicon-search"
								aria-hidden="true"></span> {this.state.isSearching?'Searching...':'Search'}
						</button>
						<div className="visible-xs-block col-xs-12" />
				</li>
				{ (searchResultsComponents.length > 0) ?
					<li className="list-group-item">
						<ul className="list-group">
							{ searchResultsComponents }
						</ul>
					</li>
					: '' 
				}
			</div>
    );
  }


}

export default connect()(AdvancedSearch);
