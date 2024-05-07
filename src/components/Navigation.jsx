import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Homepage from '../Pages/Homepage'
import CoinPage from '../Pages/CoinPage'
const Navigation = () => {
  return (
    <div>
         <BrowserRouter>
      
      <Header/>
       <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/coins/:id" element={<CoinPage/>}/>
       </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default Navigation