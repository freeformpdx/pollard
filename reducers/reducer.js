import * as actionTypes from '../constants/ActionTypes';

import { Map, List } from 'immutable';

// TODO
// bifurcate reducers/actionTypes/actions on major feature



const initialState = Map({});
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

export function dataSongs(state = Map({}), action) {
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
