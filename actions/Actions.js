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

export function selectSong(id) {
  return {
    type: types.SELECT_SONG,
    id
  }
};

export function searchSong(song) {
  return {
    type: types.SEARCH_SONG,
    song
  }
};

export function addSong(song) {
  return {
    type: types.ADD_SONG,
    song
  }
};

export function markSongPlayed(payload) {
  return {
    type: types.MARK_SONG_PLAYED,
    payload
  }
};

export function updateSong(update) {
  return {
    type: types.UPDATE_SONG,
    update
  }
};

export function deleteSong(payload) {
  return {
    type: types.DELETE_SONG,
    payload
  }
};
