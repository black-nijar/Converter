import { ADD_TO_HISTORY } from './actionTypes'

export const addToHistory =(currentConversion) => dispatch => {
  dispatch({
    type: ADD_TO_HISTORY,
   currentConversion
  })
}