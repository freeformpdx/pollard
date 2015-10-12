import * as actionTypes from '../constants/ActionTypes';

import Immutable, { Map, List } from 'immutable';

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
		played: true
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

export function rootReducer(state = Map({}), action) {
	return state
		.set('view', view(state, action))
		.set('data', data(state, action));
}

export function view(state = Map({}), action) {
	return state
		.set('set', viewSet(state, action))
		.set('song', viewSong(state, action));
}

export function viewSet(state = Map({}), action) {
  switch (action.type) {
  case actionTypes.SELECT_SET:
    return state.set('selected', action.id);
  default:
    return state;
  }
}

export function viewSong(state = Map({}), action) {
  switch (action.type) {
  case actionTypes.SELECT_SONG:
    return state.set('selected', action.id);
  default:
    return state;
  }
}

export function data(state = Map({}), action) {
	return state
		.set('sets', dataSet(state, action))
		.set('songs', dataSong(state, action));
}

export function dataSongs(state = initialDataSongsState, action) {
  switch (action.type) {
	case actionTypes.SEARCH_FOR_SONG:
	case actionTypes.ADD_SONG:
	case actionTypes.MARK_SONG_PLAYED:
	case actionTypes.UPDATE_SONG:
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
