import { RATES, BASE } from "./actionTypes";

export const currencyUpdate = (rates) => dispatch => {
  dispatch({
    type: RATES,
    rates
  })
}

export const baseUpdate = base => dispatch => {
  dispatch({
    type: BASE,
    base
  })
}