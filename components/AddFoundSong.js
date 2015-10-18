import React, { Component } from 'react';

export default class AddFoundSong extends Component {
	handleClick(event) {
		console.log('adding found song');
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
