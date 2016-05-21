import * as types from '../constants/ActionTypes';

export function addSet(payload) {
  return {
    type: types.ADD_SET,
    payload
  }
};

export function selectSet(payload) {
  return {
    type: types.SELECT_SET,
    payload
  }
};

export function updateSet(payload) {
  return {
    type: types.UPDATE_SET,
    payload
  }
};

export function deleteSet(payload) {
  return {
    type: types.DELETE_SET,
    payload
  }
};

export function selectSong(idx) {
  return {
    type: types.SELECT_SONG,
    idx
  }
};

export function deselectSong() {
  return {
    type: types.DESELECT_SONG
  }
};

export function searchSong(artist, title) {
  return {
    type: types.SEARCH_SONG,
    artist,
    title
  }
};

export function artistChange(artist) {
  return {
    type: types.ARTIST_CHANGE,
    artist
  }
};

export function titleChange(title) {
  return {
    type: types.TITLE_CHANGE,
    title
  }
};

export function clearSearchSongInputs() {
  return {
    type: types.CLEAR_SEARCH_SONG_INPUTS,
  }
};

export function addSong(song) {
  return {
    type: types.ADD_SONG,
    song
  }
};

export function markSongPlayed(idx) {
  return {
    type: types.MARK_SONG_PLAYED,
    idx
  }
};

export function moveSong(fromIdx, toIdx) {
  return {
    type: types.MOVE_SONG,
    fromIdx,
    toIdx
  }
};

export function updateSong(update) {
  return {
    type: types.UPDATE_SONG,
    update
  }
};

export function deleteSong(idx) {
  return {
    type: types.DELETE_SONG,
    idx
  }
};

export function setSetlistId(id) {
  return {
    type: types.SET_SETLIST_ID,
    id
  }
};

export function loadSetlistState(state) {
  return {
    type: types.LOAD_SETLIST_STATE,
    state
  }
};
