import { RATES } from "../actions/actionTypes";

const initState = [];

const ratesReducer = (state = initState, action) => {
  switch (action.type) {
    case RATES:
      return action.rates
    default:
      return state
  }
}

export default ratesReducer