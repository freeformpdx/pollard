import config from '../../env.js';
import * as actionTypes from '../constants/ActionTypes';
import {
  loadSetlistState,
  setError,
  clearError,
  retrySave,
} from '../actions/Actions';

// Middleware that pushes state back to server anytime songs get fuxxed wif
const shouldPushStateActionTypes = [
  actionTypes.ADD_SONG,
  actionTypes.DELETE_SONG,
  actionTypes.MARK_SONG_PLAYED,
  actionTypes.MOVE_SONG,
  actionTypes.UPDATE_SONG,
  actionTypes.RETRY_SAVE,
  actionTypes.SET_PLAYLIST_TITLE,
  actionTypes.SET_PLAYLIST_DESCRIPTION,
  actionTypes.SET_PLAYLIST_IMG,
];

function shouldPushState(action) {
  return shouldPushStateActionTypes.indexOf(action.type) >= 0;
}

function _pushState(state, dispatch) {
  const pushStateUrl = 'http://' + config.API_URL + '/api/pushState';
  const body = JSON.stringify({
    newState: state,
  });
  fetch(pushStateUrl, {
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    method: "POST",
    body,
  })
  .then((res) => {
    if (!res.ok) {
      const errMsg = "Failed to save playlist";
      dispatch(setError(errMsg));
      console.log(errMsg);
      throw Error(errMsg);
    }
    return res.json();
  }).then((res) => {
    if (res.error) {
      dispatch(setError(res.error));
      throw Error(res.error);
    } else {
      res.setlist.id = res.setlist._id;
      dispatch(loadSetlistState(res.setlist));
      dispatch(clearError());
    }
  }).catch(error => {
    dispatch(setError("Failed saving playlist, retrying..."));
    setTimeout(() => dispatch(retrySave()), 3000);
    console.log(error);
  });
}

const pushState = debounce(_pushState, 1000);

let pushToServer = store => next => action => {
  const result = next(action);
  if (shouldPushState(action)) {
    pushState(store.getState().state.toJSON(), store.dispatch);
  }

  return result;
};

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export default pushToServer;
