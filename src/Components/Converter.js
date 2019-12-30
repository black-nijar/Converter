import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions/fetchAction';
import { currencyUpdate } from '../actions/ratesAction';
import { resultUpdate } from '../actions/resultAction';
import { inputValueUpdate } from '../actions/inputValueAction';
import { addToHistory } from '../actions/historyAction'

class Converter extends Component {

  componentDidMount() {
    this.props.fetchCurrency()
    this.props.currencyUpdate('GBP')
  }

  handleChange = (e) => {
    this.props.currencyUpdate(e.target.value)
    const { conversionValue: { input } } = this.props
    const value = input !== isNaN ? input : 0
    this.makeConversion(e.target.value, value)
  }

  makeConversion = (targetCurrency, input) => {
    const { rates, base } = this.props.currencyData.currency
    let selectedRate = rates[targetCurrency]
    const result = input * selectedRate
    if (result !== 0 && !isNaN(result)) {
      this.props.resultUpdate(result)
      const currentData = {
        base: base,
        targetCurrency: targetCurrency,
        input: input,
        result: result
      }
      this.props.addToHistory(currentData)
    }
  }

  handleInput = (e) => {
    this.props.inputValueUpdate(e.target.value)
    const { targetCurrency } = this.props
    this.makeConversion(targetCurrency, e.target.value)
  }

  render() {
    const { conversionValue: { result } } = this.props
    if (this.props.currencyData === null || result === isNaN) {
      return <div></div>
    }
    const { base, date } = this.props.currencyData.currency
    const toCurrency = ['GBP', 'INR']
    const { conversionHistory } = this.props || {};
    const List = conversionHistory.length ? (
      conversionHistory.map((currentHistory, index) => {
        return (
          <div className='history' key={index}>
            <div>
              {currentHistory.input} {currentHistory.base} = {currentHistory.result} {currentHistory.targetCurrency}
            </div>
          </div>
        )
      })
    ) : (
        <div>No History</div>
      )
    return (
      <div className='container-fluid'>
        <div style={{ width: '500px', margin: 'auto', padding: '50px' }}>
          <form className='form'>
            <div className='card-panel'>
              <h5 className='center card-title'>CURRENCY CONVERTER</h5><br />
              <h6>{date}</h6>
              <div className='row'>
                <div className='input-field col s6' currency='currency'>
                  <select
                    className='browser-default'
                    name='base'
                    onChange={this.handleChange}
                    value={base}
                  >
                    <option>{base}</option>
                  </select>
                  <input
                    type='number'
                    onChange={this.handleInput}
                  />
                </div>
                <div className='input-field col s6' currency='convertTo'>
                  <select
                    className='browser-default'
                    onChange={this.handleChange}
                  >
                    {
                      toCurrency.map(cur => <option key={cur}>{cur}</option>)
                    }
                  </select>
                  <input
                    type='number'
                    value={result ? result : {}}
                    onChange={this.handleInput}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className='card-panel'>
            <h5>History</h5>
            {List}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currencyData: state.currencyData,
    targetCurrency: state.targetCurrency,
    conversionValue: state.conversionValue,
    conversionHistory: state.conversionHistory
  }
}

const mapDispatchToprops = dispatch => {
  return {
    fetchCurrency: () => { dispatch(fetchCurrency()) },
    currencyUpdate: (currency) => { dispatch(currencyUpdate(currency)) },
    resultUpdate: (res) => { dispatch(resultUpdate(res)) },
    inputValueUpdate: (input) => { dispatch(inputValueUpdate(input)) },
    addToHistory: (currentConversion) => { dispatch(addToHistory(currentConversion)) }
  }
}
export default connect(mapStateToProps, mapDispatchToprops)(Converter)
