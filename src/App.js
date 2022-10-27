import React ,{useRef , useState} from 'react'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Exchanges from './pages/Exchanges/Exchanges';
function App() { 
  const [state1 , setState1] = useState(true);
  const [state2 , setState2] = useState(false);
  return (
      <BrowserRouter>
          <Header state1={state1} state2={state2}/>
          <Routes>
            <Route path='/' element={<Home setState1={setState1} setState2={setState2}/>}/>
            <Route path='/exchange' element={<Exchanges/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
