import React, { Component } from 'react'

class Converter extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div style={{width:'500px',margin:'auto',padding:'50px'}}>
          <form id='form'>
            <div className='card-panel'>
              <h5 className='center card-title'>CURRENCY CONVERTER</h5><br/>
              <h6 className='amount-converter center'>
                <b>amount </b>country = <b>amount</b>country
              </h6>
              <div className='row'>
                <div className='input-field col s6' id='currency'>
                  <select className='browser-default'>
                    <option>Select</option>
                  </select>
                  <input type='number'/>
                </div>
                <div className='input-field col s6' id='convertTo'>
                  <select className='browser-default'>
                    <option>Select</option>
                  </select>
                  <input type='number' 
                         disabled={true}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Converter
