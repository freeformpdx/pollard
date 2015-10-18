import * as actionTypes from '../constants/ActionTypes';

import Immutable, { Map, List } from 'immutable';

import guid from '../lib/guid';

// TODO
// bifurcate reducers/actionTypes/actions on major feature


/* remove this when real data happens */
const initialDataSongsState = Immutable.fromJS({
	'id1': {
		inputs: {
			title: 'tracy\'s jacks',
			artist: 'blurry',
			album: 'parklifes',
			label: 'label 5',
			year: '1996',
			notes: 'it\'s a good song!',
		},
		played: false
	},
	'id2': {
		inputs: {
			title: 'Ride the Ligtening',
			artist: 'Metalica',
			album: 'Minister of Puppets',
			label: 'Label #420',
			year: '1987',
			notes: 'bang yr head',
		},
		played: true,
	},
	'id3': {
		inputs: {
			title: 'india was an angel',
			artist: 'guiding by voices',
			album: 'king ship && the golden boyz',
			label: 'scat records',
			year: '1993',
			notes: 'sweet spots 4 you',
		},
		played: true,
	}
});

const initialViewSongState = Immutable.fromJS({
	selected: 'id1'
});

const initialSongState = {
	inputs: {
		title: '',
		artist: '',
		album: '',
		label: '',
		year: '',
		notes: '',
	},
	played: false
};


export function state(state = Map({}), action) {
	return state
		.set('view', view(state.get('view'), action))
		.set('data', data(state.get('data'), action));
}

export function view(state = Map({}), action) {
	return state
		.set('set', viewSet(state.get('set'), action))
		.set('song', viewSong(state.get('song'), action));
}

export function viewSet(state = Map({}), action) {
  switch (action.type) {
  case actionTypes.SELECT_SET:
    return state.set('selected', action.id);
  default:
    return state;
  }
}

export function viewSong(state = initialViewSongState, action) {
  switch (action.type) {
  case actionTypes.SELECT_SONG:
    return state.set('selected', action.id);
	case actionTypes.SEARCH_FOR_SONG:
		debugger;
    return state;
  default:
    return state;
  }
}

export function data(state = Map({}), action) {
	return state
		.set('sets', dataSets(state.get('sets'), action))
		.set('songs', dataSongs(state.get('songs'), action));
}

export function dataSongs(state = initialDataSongsState, action) {
  switch (action.type) {
	case actionTypes.UPDATE_SONG:
		return state.setIn(
			[action.update.id, 'inputs', action.update.key],
			action.update.val
		);
	case actionTypes.ADD_SONG:
		// TODO: make this its own function
		let song = action.song;
		let newGuid = guid();
		let songObj = {};

		if (Object.keys(action.song).length == 0) {
			song = initialSongState;
		}

		songObj[newGuid] = Immutable.fromJS(song);

		return Immutable.Map(songObj).merge(state);
	case actionTypes.MARK_SONG_PLAYED:
		return state.setIn(
			[action.id, 'played'],
			!state.get(action.id).get('played')
		);
	case actionTypes.DELETE_SONG:
		debugger;
    return state;
  default:
    return state;
  }
}

export function dataSets(state = Map({}), action) {
  switch (action.type) {
	case actionTypes.ADD_SET:
	case actionTypes.UPDATE_SET:
	case actionTypes.DELETE_SET:
		debugger;
    return state;
  default:
    return state;
  }
}
