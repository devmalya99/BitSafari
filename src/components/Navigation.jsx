import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from '../Pages/Homepage'
import CoinPage from '../Pages/CoinPage'
import Header from './common/Header/Header'
import LandingPage from '../components/LandingPage/index'
import Dashboard from '../Pages/Dashboard'
import WatchList from '../Pages/Dashboard/WatchList'
import Compare from '../components/Compare'
import Login from './GetIn/Login'
const Navigation = () => {
  return (
    <div>
         <BrowserRouter>
      
      <Header/>
       <Routes>
       <Route path="/" element={<LandingPage/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/compare" element={<Compare/>}/>
       <Route path="/watchlist" element={<WatchList/>}/>
       <Route path="/home" element={<Homepage/>}/>
       <Route path="/coins/:id" element={<CoinPage/>}/>
       <Route path='/getin' element={<Login/>}/>
       </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default Navigation