import { combineReducers } from 'redux'
import currencyReducer from './currencyReducer'
import ratesReducer from './ratesReducer'
import { historyReducer } from './historyReducer';
import { resultReducer } from './resultReducer';
import { inputValueReducer } from './inputValueReducer'

const rootReducer = combineReducers({
    currencyData: currencyReducer,
    targetCurrency: ratesReducer,
    conversionHistory: historyReducer,
    currencyResult: resultReducer,
    inputValue: inputValueReducer,
})

export default rootReducer