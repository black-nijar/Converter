import { INPUT_VALUE_ACTION, RESULT_VALUE_ACTION } from '../actions/actionTypes'

const initState = { }

export const conversionReducer =(state = initState, action) => {
  switch(action.type) {
    case INPUT_VALUE_ACTION:
      return {
        ...state,
        'input': action.input
      }
    case RESULT_VALUE_ACTION:
      return {
        ...state,
        'result': action.result
      };
    default:
      return state;
  }
}