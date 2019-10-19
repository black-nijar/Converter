import { FETCH_CURRENCY } from '../actions/actionTypes'

const initState = {
  currency: [ ]
}

const currencyReducer =(state = initState, action) => {
  switch(action.type) {
    case FETCH_CURRENCY:
      return {
        ...state,
      currency:  action.currency
  }
    default:
      return state;
  }
}
export default currencyReducer;