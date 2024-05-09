import React from 'react'
import { useSelector } from 'react-redux'
import CryptoPriceCard from '../../../components/Cards/CryptoPriceCard'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const WatchList = () => {
  const arr = useSelector((store)=>store.watchList.list)
  console.log(arr)
  const navigate = useNavigate()

  const handleHome =()=>{
    navigate ('/home')
  }
  return (
    <motion.div className=''
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 1 }}>
      {
        arr.length===0 && 
        <div className='text-center flex flex-col items-center'>

          <p className='text-5xl mt-16'>Its lonely here....</p>

        <p className=' mb-4 text-5xl mt-8'>How about we add something</p>

        <button className='bg-blue-700 px-6 py-2 rounded-xl font-bold text-2xl mt-8'
        onClick={()=>handleHome()}>Go to Home</button>
        
        </div>
      }
      {
        arr.map((each)=>{
          return(
            <div key={each.id}>
              <CryptoPriceCard data={each}/>
            </div>
          )
        })
      }
      
    </motion.div>
  )
}

export default WatchList