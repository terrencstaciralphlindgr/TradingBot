import React from 'react'
import './Header.css';
import {BsStack} from 'react-icons/bs';
import {BiBot} from 'react-icons/bi';
const Header = ({state1 , state2}) => {
  return (
        <header>
        <ul>
            <li className={`${state1 ? "test" : ""}`} style={{padding:"12px 20px 10px 20px" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                <BsStack style={{marginRight:"5px" , fontSize:"20px"}}/>Home</li>
            <li className={`${state2 ? "test" : ""}`} style={{padding:"12px 20px 10px 20px"}}>Exchanges</li>
            <li style={{padding:"12px 20px 10px 20px"}}>Portfolio</li>
            <li style={{lineHeight:"0px" , textAlign:"center" , paddingTop:"10px"}}>
                <p style={{fontSize:"10px"}}>Total Investment</p> 
                <p>00,0000.0000</p>
                <p style={{fontSize:"10px"}}>USDT</p>
            </li>
            <li style={{lineHeight:"0px" , paddingTop:"10px" , textAlign:"center"}}>
                <p style={{fontSize:"10px"}}>Total Closed Orders</p>
                <p>00,000,000</p>
            </li>
            <li style={{lineHeight:"0px" , paddingTop:"10px" , textAlign:"center"}}>
                <p style={{fontSize:"10px"}}>Profits</p>
                <p>$000.00 %00.00</p>
            </li>
            <li style={{padding:"10px 10px 0px 10px" , display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
                <p>Create<br/>new bot </p>
                <BiBot style={{fontSize:"30px" , marginLeft:"10px"}}/>
            </li>
        </ul>
        </header>
)
}

export default Header
