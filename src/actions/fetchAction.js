import { FETCH_CURRENCY } from './actionTypes'
import axios from 'axios'

export const fetchCurrency = () => dispatch => {
      axios.get(`http://data.fixer.io/api/latest?access_key=2544937a0b8cb7c8393d7e503b735b07`)
            .then(res => dispatch({
                  type: FETCH_CURRENCY,
                  currency: res.data
            }))
            .then(e => console.log('FETCHING CURRENCIES', ))
            .catch(err => console.log('ERROR OCCURED DURING FETCHING', err))
} 