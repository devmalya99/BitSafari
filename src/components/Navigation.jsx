import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from '../Pages/Homepage'
import CoinPage from '../Pages/CoinPage'
import Header from './common/Header/Header'
import LandingPage from '../components/LandingPage/index'
import Dashboard from '../Pages/Dashboard'
import WatchList from '../Pages/Dashboard/WatchList'
const Navigation = () => {
  return (
    <div>
         <BrowserRouter>
      
      <Header/>
       <Routes>
       <Route path="/" element={<LandingPage/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/watchlist" element={<WatchList/>}/>
       <Route path="/home" element={<Homepage/>}/>
       <Route path="/coins/:id" element={<CoinPage/>}/>
       </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default Navigation