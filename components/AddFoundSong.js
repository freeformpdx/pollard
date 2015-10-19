import React, { Component } from 'react';

export default class AddFoundSong extends Component {
	handleClick(event) {
		console.log('adding found song');
		this.props.onAddSong({
			inputs: {
				title: this.props.song.title ? this.props.song.title : '',
				artist: this.props.song.artist ? this.props.song.artist : '',
				album: this.props.song.album? this.props.song.album : '',
				label: this.props.song.label ? this.props.song.label : '',
				year: this.props.song.date ? this.props.song.date : '',
				notes: '',
			},
			played: false
		});
		this.props.onClearSongs();
	}


  render() {
    return (
			<button
				type="button"
				className="btn btn-primary"
				onClick={ (e) => this.handleClick(e) }
				>
				<span
					className="glyphicon glyphicon-plus"
					aria-hidden="true"></span> Add To Setlist
			</button>
    );
  }

}
