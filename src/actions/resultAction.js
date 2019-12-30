import { RESULT_VALUE_ACTION } from './actionTypes'

export const resultUpdate = (result) => dispatch => {
  dispatch({
    type: RESULT_VALUE_ACTION,
    result
  })
}