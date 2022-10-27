import React , {useState} from 'react'
import './Exchanges.css'
import Connect from '../../components/Conntect/Connect';
import AddExchanges from '../../components/AddExchanges/AddExchanges';
import ConnectKucion from '../../components/ConnectKucoin/ConnectKucion';
const Exchanges = () => {
    const [connect , setConnect] = useState(false)
    const [kucoin , setKucoin] = useState(true)
    const Fuction = () => {
        if(connect){
            return <Connect/>
        }else if(kucoin){
            return <ConnectKucion/>
        }
    }
    return (
    <div className='exchange'>
        <div className='section1'>
            <Fuction/>
        </div>
        <div className='section2'>
            <AddExchanges/>
        </div>
</div>
)
}

export default Exchanges
