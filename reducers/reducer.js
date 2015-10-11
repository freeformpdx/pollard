 import { POLLARD_ACTION } from '../constants/ActionTypes';

// TODO
// make state immutable
// bifurcate reducers

const initialState = [{
  payload: {}
}];

export function rootReducer(state = initialState, action) {
  switch (action.type) {
  case POLLARD_ACTION:
    return [{
      payload: action.payload
    }, ...state];

  default:
    return state;
  }
}
