import React, { Component } from 'react';

export default class AddFoundSong extends Component {
	handleClick(event) {
		this.props.onAddSong({
			inputs: {
				title: this.props.song.title ? this.props.song.title : '',
				artist: this.props.song.artist ? this.props.song.artist : '',
				album: this.props.song.album? this.props.song.album : '',
				label: this.props.song.label ? this.props.song.label : '',
				year: this.props.song.date ? this.props.song.date : '',
				notes: '',
			},
			img64px: this.props.song.img64px ? this.props.song.img64px : '',
			img300px: this.props.song.img300px ? this.props.song.img300px : '',
			played: false
		});
		this.props.onClearSongs();
	}


  render() {
    return (
			<button
				type="button"
				className="btn btn-primary col-xs-12 col-sm-3 col-sm-offset-3"
				onClick={ (e) => this.handleClick(e) } >
				<span
					className="glyphicon glyphicon-plus"
					aria-hidden="true"></span> Add To Setlist
			</button>
    );
  }

}
