import { INPUT_VALUE_ACTION } from './actionTypes'

export const inputValueUpdate = (input) => dispatch => {
  dispatch({
    type: INPUT_VALUE_ACTION,
    input
  })
}