import { useEffect, useState } from 'react'

import './App.css'
import Navigation from './components/Navigation'
import CryptoContext from './context/cryptoContext'
import 'react-alice-carousel/lib/alice-carousel.css';
import TradingViewChart from './components/Widget/TradingViewChart';


function App() {
  
const [currency,setCurrency] = useState('INR')
const [symbol,setSymbol] = useState('₹')

useEffect(()=>{
  if(currency==='INR') setSymbol("₹")
    else if(currency ==='USD') setSymbol("$")

},[currency])
  return (
    <>
    <CryptoContext.Provider value={{currency,setCurrency,symbol,setSymbol}}>
    <div className='dark'>
       <Navigation/>
       
    </div>
    </CryptoContext.Provider>
     
     
      
    </>
  )
}

export default App
