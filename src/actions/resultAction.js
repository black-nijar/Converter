export const resultUpdate = (result) => dispatch => {
  dispatch({
    type: 'RESULT',
    result
  })
}