import { combineReducers } from 'redux'
import currencyReducer from './currencyReducer'
import ratesReducer from './ratesReducer'
import { historyReducer } from './historyReducer';
import { conversionReducer } from './conversionReducer'

const rootReducer = combineReducers({
    currencyData: currencyReducer,
    targetCurrency: ratesReducer,
    conversionHistory: historyReducer,
    conversionValue: conversionReducer,
})

export default rootReducer