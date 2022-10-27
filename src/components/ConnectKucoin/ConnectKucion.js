import React from 'react'
import './ConnectKucoin.css'
function ConnectKucion() {
  return (
    <div className='connectKucoin'>
        <h3>Connect Kucoin</h3>
        <div className='main mx-2'>
            <h4>API KEY PERMISSIONS</h4>
            <div>
                <h5>General</h5>
                <p>Limited to read-only operations such as querying account information, account statements, 
                    and order information. The API cannot be used to perform operations such as order placement or withdrawals.
                </p>
            </div>
            <div>
                <h5>Trade</h5>
                <p> 
                    API calls can be used to perform operations such as order placement and concelation.
                </p>
            </div>
            <div>
                <h5>IP Restriction</h5>
                <p> 
                    Only trusted IP addresses can access the api Secret.
                </p>
            </div>
            <div>
                <h5>Transfer</h5>
                <p> 
                    Not Allowed.
                </p>
            </div>
        </div>
        <div className='api d-block'>
            <p >API Key</p>
            <p>API Secret</p>
            <p>PassPhrase</p>
            <button>CONNECT</button>
        </div>
    </div>
  )
}

export default ConnectKucion
