import React, { Component } from 'react';
//import fetch from 'whatwg-fetch';
import classNames from 'classnames';

import secrets from '../secrets';
import mergeStyles from '../lib/mergeStyles';

import FoundSong from './FoundSong';



export default class SearchSong extends Component {

	constructor(props) {
		super(props);
		let apiKey = secrets().echoNest;
		this.state = {
			trackValue: '',
			artistValue: '',
			isSearching: false,
			foundSongs: [],
			apiKey
		};
	}

	//TODO: DRY

	handleArtistChange(event) {
		this.setState({artistValue: event.target.value});
	}

	handleTrackChange(event) {
		this.setState({trackValue: event.target.value});
	}

	handleSearchClick(event) {
		this.setState({isSeraching: true});
		let searchUrl = this.getSearchUrl();
		let self = this;

		fetch(searchUrl)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			self.setState({
				foundSongs: json.response.songs,
				isSearching: false
			});
		}).catch(function(ex) {
			console.log('parsing failed', ex)
		})
	}

	getSearchUrl() {
		return "http://developer.echonest.com/api/v4/song/search?" +
			"api_key=" + this.state.apiKey +
			"&title=" + this.state.trackValue +
			"&artist=" + this.state.artistValue +
			"&bucket=id:7digital-US&bucket=audio_summary&bucket=tracks";
	}

  render() {
		let songStyle= mergeStyles({
			backgroundColor: '#F6EBFA'
		});

		var artistValue = this.state.artistValue;
		var trackValue = this.state.trackValue;

		let foundSongsComponents = this.state.foundSongs.map(function(foundSong, idx)  {
			return <FoundSong key={ idx } song={ foundSong } />;
		});


    return (
			<li
				className="list-group-item"
				style={ songStyle }>
				<div className="row">
					<input
						type="text"
						placeholder="artist"
						value={ artistValue }
						onChange={ (e) => this.handleArtistChange(e) }/>
					<input
						type="text"
						placeholder="track"
						value={ trackValue }
						onChange={ (e) => this.handleTrackChange(e) }/>
					<button 
						type="button"
						className="btn btn-primary"
						onClick={ (e) => this.handleSearchClick(e) }>
						<span
							className="glyphicon glyphicon-search"
							aria-hidden="true"></span> Search
					</button>
					{ (this.state.foundSongs.length > 0) ?
						<ul className="list-group">
							{ foundSongsComponents }
						</ul>
						: '' 
					}
				</div>
			</li>
    );
  }

}
