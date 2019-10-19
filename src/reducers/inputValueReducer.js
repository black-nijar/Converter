import { INPUT_VALUE_ACTION } from '../actions/actionTypes'

const initState = { }

export const inputValueReducer =(state = initState, action) => {
  switch(action.type) {
    case INPUT_VALUE_ACTION:
      return action.input
    default:
      return state;
  }
}