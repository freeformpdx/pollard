
import React, { Component } from 'react';

import { POLLARD_ACTION } from '../constants/ActionTypes';

export default class SongInput extends Component {
	handleChange(event) {
		console.log('hit input change');
	}

  render() {
    return (
				<label>{ this.props.label }
					<input
						type="text"
						value={ this.props.val }
						onChange={ (e) => this.handleChange(e) }
						/>
				</label>
    );
  }
}
