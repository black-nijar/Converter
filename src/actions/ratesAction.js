import { RATES } from "./actionTypes";

export const currencyUpdate = (rates) => dispatch => {
  dispatch({
    type: RATES,
    rates
  })
}
