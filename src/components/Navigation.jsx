import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from '../Pages/Homepage'
import CoinPage from '../Pages/CoinPage'
import Header from './common/Header/Header'
const Navigation = () => {
  return (
    <div>
         <BrowserRouter>
      
      <Header/>
       <Routes>
       <Route path="/home" element={<Homepage/>}/>
       <Route path="/coins/:id" element={<CoinPage/>}/>
       </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default Navigation