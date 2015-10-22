import * as actionTypes from '../constants/ActionTypes';

// Middleware that posts state back to server anytime songs get fuxxed wif

let postAll = store => next => action => {
  const result = next(action);
	if ([actionTypes.ADD_SONG, actionTypes.UPDATE_SONG,
			 actionTypes.DELETE_SONG, actionTypes.MARK_SONG_PLAYED].indexOf(action.type) !== -1) {

		const state = store.getState().state;
		const stateJSON = JSON.stringify(state.toJSON());
		fetch('/post', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: stateJSON
		});

	}
  return result;
};

export default postAll;
