import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import './Connect.css'
const Connect = () => {
  return (
    <div className='connect'>
        <h4>Connected Exchanges</h4>
        <div>
            <p>No connected exchanges yet!</p>
            <p>Connect your first one here <BsArrowRight/></p>
        </div>
    </div>
  )
}

export default Connect
