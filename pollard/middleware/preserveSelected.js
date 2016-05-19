import { selectSong } from '../actions/Actions.js';
import * as actionTypes from '../constants/ActionTypes';

// Middleware that preserves selected song anytime one is added

let preserveSelected = store => next => action => {
  const result = next(action);
  if (action.type == actionTypes.ADD_SONG) {
    const state = store.getState().state;
    const selectedSong = parseInt(state.getIn(['view','song','selected']));
    if (!isNaN(selectedSong)) {
      const nowSelected = selectedSong + 1;
      store.dispatch(selectSong(nowSelected));
    }
  }
  return result;
};

export default preserveSelected;
