import React from 'react'
import First from '../../components/First/First';
import CreateBot from '../../components/CreateBot/CreateBot'
import './Home.css'
const Home = ({setState1  , setState2}) => {
  return (
    <div className='home'>
        <div className='section1'>
            <First/>
        </div>
        <div className='section2'>
            <CreateBot setState1={setState1} setState2={setState2}/>
        </div>
    </div>
  )
}

export default Home
