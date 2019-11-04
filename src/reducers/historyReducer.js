import { ADD_TO_HISTORY } from '../actions/actionTypes';

const initState = [];

export const historyReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return [
        ...state,
        action.currentConversion
      ].slice(-5)
    default:
      return state;
  }
}