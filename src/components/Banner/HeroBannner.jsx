import React from 'react'
import { Link } from 'react-router-dom'
import Banner from "../../assets/Banner.jpg"
import Caraousal from './Caraousal'
const HeroBannner = () => {
  return (
    <div>
         <div className="relative z-0 rounded-3xl  mb-8 min-h-screen/75 bg-cover bg-center " style={{ backgroundImage: `url(${Banner})` }}>
      <div className="absolute inset-0 bg-black opacity-65 rounded-3xl "></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        
        <div className="flex flex-col text-center text-white mt-12 items-center">
        <h1 className="text-5xl font-bold mb-4 text-center">Explore Cryptoverse</h1>
          <p className="text-xl mb-8">Find your next fortune</p>
         
          <div className='main-caraousal-container'>
          <Caraousal/>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroBannner