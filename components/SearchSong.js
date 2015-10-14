import React, { Component } from 'react';
//import fetch from 'whatwg-fetch';
import classNames from 'classnames';

import mergeStyles from '../lib/mergeStyles';

import secrets from '../secrets';


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

	/*
	handleChange(event) {
		let searchUrl = this.getSearchUrl(
			event.target.value,
			this.state.apiKey);
		$.get(this.props.source, function(result) {
			if (this.isMounted()) {
				this.setState({
					username: lastGist.owner.login,
					lastGistUrl: lastGist.html_url
				});
			}
		}.bind(this));
		this.setState({value: event.target.value});
	}
	*/

	getSearchUrl() {
		return "http://developer.echonest.com/api/v4/song/search?" +
			"api_key=" + this.state.apiKey +
			"&title=" + this.state.trackValue +
			"&artist=" + this.state.artistValue;
	}

  render() {
		let songStyle= mergeStyles({
			backgroundColor: '#F6EBFA'
		});

		var artistValue = this.state.artistValue;
		var trackValue = this.state.trackValue;

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
					<pre>{ JSON.stringify(this.state.foundSongs, null, 2) }</pre>
				</div>
			</li>
    );
  }

}
