import * as actionTypes from '../constants/ActionTypes';

import Immutable, { Map, OrderedMap, List } from 'immutable';

import guid from '../lib/guid';

// TODO
// bifurcate reducers/actionTypes/actions on major feature


const initialViewSongState = Immutable.fromJS({
	selected: ''
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
		.set('setlist', viewSetlist(state.get('setlist'), action))
		.set('song', viewSong(state.get('song'), action));
}

export function viewSetlist(state = Map({}), action) {
  switch (action.type) {
  case actionTypes.SET_SETLIST_ID:
    return state.set('id', action.id);
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
		.set('setlists', dataSetlists(state.get('setlists'), action))
		.set('songs', dataSongs(state.get('songs'), action));
}

export function dataSongs(state = OrderedMap({}), action) {
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

		return OrderedMap(songObj).merge(state);
	case actionTypes.MARK_SONG_PLAYED:
		return state.setIn(
			[action.id, 'played'],
			!state.get(action.id).get('played')
		);
	case actionTypes.DELETE_SONG:
    return state.delete(action.id);
  default:
    return state;
  }
}

export function dataSetlists(state = Map({}), action) {
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
