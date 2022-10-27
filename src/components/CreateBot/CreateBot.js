import React, { useState } from 'react'
import './CreateBot.css'
import {BiBot} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
const CreateBot = ({setState1 , setState2}) => {
  const navigate = useNavigate();
  const ChangeRoute = ()=>{
    navigate('/exchange')
    setState1(false);
    setState2(true);
  }
  return (
    <div className='createbot'>
        <h3>Watchlist</h3>
        <div className='list'>
            <span>Currency</span>
            <span>Price</span> 
            <span>24h Change </span> 
            <span>Create bot</span>
        </div>
        <div className='add mt-2'>
            <button className='btn btn-primary' onClick={ChangeRoute}>+</button>
            <BiBot style={{fontSize:"30px"}}/>
        </div>
    </div>
  )
}

export default CreateBot
