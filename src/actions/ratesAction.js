export const currencyUpdate = (rates) => dispatch => {
  dispatch({
    type: 'RATES',
    rates
  })
}
