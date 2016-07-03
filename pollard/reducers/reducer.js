import * as actionTypes from '../constants/ActionTypes';

import Immutable, { Map, List } from 'immutable';

// TODO
// bifurcate reducers/actionTypes/actions on major feature


const initialViewSongState = Immutable.fromJS({
  selected: ''
});

const initialDataSetlistState = Immutable.fromJS({
  id: '',
  songs: []
});

const initialSongState = {
  inputs: [{
    name: 'title',
    value: '',
  }, {
    name: 'artist',
    value: '',
  }, {
    name: 'album',
    value: '',
  }, {
    name: 'label',
    value: '',
  }, {
    name: 'year',
    value: '',
  }, {
    name: 'notes',
    value: '',
  }],
  img64px: '',
  img300px: '',
  played: false
};


export function state(state = Map({}), action) {
  return state
    .set('view', view(state.get('view'), action))
    .set('data', data(state.get('data'), action));
}

export function view(state = Map({}), action) {
    return state
      .set('search', viewSearch(state.get('search'), action))
      .set('setlist', viewSetlist(state.get('setlist'), action))
      .set('song', viewSong(state.get('song'), action))
      .set('error', viewError(state.get('error'), action));
}

export function viewSearch(state = Map({}), action) {
  switch (action.type) {

  case actionTypes.ARTIST_CHANGE:
    return state
      .set('artist', action.artist)

  case actionTypes.TITLE_CHANGE:
    return state
      .set('title', action.title);

  case actionTypes.SEARCH_SONG:
    return state
      .set('artist', action.artist)
      .set('title', action.title);

  case actionTypes.CLEAR_SEARCH_SONG_INPUTS:
    return state
      .set('artist', '')
      .set('title', '');

  default:
    return state;
  }
}

export function viewSetlist(state = Map({}), action) {
  switch (action.type) {

  case actionTypes.LOAD_SETLIST_STATE:
    return state.set('id', action.state.id);
  case actionTypes.SET_SETLIST_ID:
    return state.set('id', action.id);

  default:
    return state;
  }
}

export function viewSong(state = initialViewSongState, action) {
  switch (action.type) {
  case actionTypes.SELECT_SONG:
    return state.set('selected', action.idx);
  case actionTypes.DESELECT_SONG:
    return state.set('selected', null);
  case actionTypes.MOVE_SONG:
    // persist selected state while moving
    if (state.get('selected') == action.fromIdx) {
      return state.set('selected', action.toIdx);
    }
    if (state.get('selected') == action.toIdx) {
      if (action.fromIdx > action.toIdx) {
        // dragging upwards
        return state.update('selected', (selected) => selected + 1)
      } else {
        // dragging downwards
        return state.update('selected', (selected) => selected - 1)
      }
    }
    return state;
  default:
    return state;
  }
}

export function viewError(state = '', action) {
  switch (action.type) {

  case actionTypes.SET_ERROR:
    return action.error;
  case actionTypes.CLEAR_ERROR:
    return '';
  default:
    return state;
  }
}

export function data(state = Map({}), action) {
  return state
    .set('setlist', dataSetlist(state.get('setlist'), action));
}

export function dataSetlist(state = initialDataSetlistState , action) {
  switch (action.type) {

  case actionTypes.LOAD_SETLIST_STATE:
    return Immutable.fromJS(action.state);

  case actionTypes.UPDATE_SONG:

    const keyIdx = state.getIn(['songs', action.update.idx, 'inputs'])
      .findIndex((value) => value.get('name') == action.update.key);

    return state.setIn(
      ['songs', action.update.idx, 'inputs', keyIdx, 'value'],
      action.update.val
    );

  case actionTypes.ADD_SONG:

    let song = action.song;

    if (Object.keys(action.song).length == 0) {
      song = initialSongState;
    } else {
      song.inputs = Object.assign([], initialSongState.inputs, song.inputs)
    }


    return state.update('songs', function (value) {
      return value.unshift(Immutable.fromJS(song));
    });

  case actionTypes.MARK_SONG_PLAYED:
    return state.updateIn(
      ['songs', action.idx, 'played'],
      function(played) {
        return !played;
      }
    );

  case actionTypes.MOVE_SONG:
    const songs = state.get('songs');
    const fromSong = songs.get(action.fromIdx);
    const smallerSongs = songs.delete(action.fromIdx);
    const reorderedSongs = smallerSongs.splice(action.toIdx, 0, fromSong);

    return state.set('songs', reorderedSongs);

  case actionTypes.DELETE_SONG:
    return state.deleteIn(['songs', action.idx]);

  case actionTypes.SERCH_SONG:
    return state.deleteIn(['songs', action.idx]);

  default:
    return state;
  }
}
