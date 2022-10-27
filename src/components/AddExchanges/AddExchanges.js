import React from 'react'
import './AddExchanges.css'
const AddExchanges = () => {
  return (
    <div className='addExchange'> 
        <h3>Add New Exchanges</h3>
        <div className='d-flex alignItems-center'>
            <span className='me-4' style={{fontSize:"14px"}}>Supported Exchanges</span>
            <span className='ms-4'  style={{fontSize:"14px"}}>Connect Exchange</span>
        </div>
        <div className='my-3 add'>
          <div className='my-2 px-2 py-1'>
              <span className=''>Kucoin</span>
              <button className='btn btn-primary'>+</button>
          </div>
          <div className='my-2 px-2 py-1'>
              <span>YoBit</span>
              <button className='btn btn-primary'>+</button>
          </div>
          <div className='my-2 px-2 py-1'>
              <span>CoinEx</span>
              <button className='btn btn-primary'>+</button>
          </div>
        </div>
    </div>
  )
}

export default AddExchanges
