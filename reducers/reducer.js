// import { POLLARD_ACTION } from '../constants/ActionTypes';

const initialState = [{
  payload: {}
}];

export default function rootReducer(state = initialState, action) {
	debugger;
  switch (action.type) {
  case POLLARD_ACTION:
    return [{
      payload: action.payload
    }, ...state];

  default:
    return state;
  }
}
