import React from 'react'
import { useSelector } from 'react-redux'
import CryptoPriceCard from '../../../components/Cards/CryptoPriceCard'

const WatchList = () => {
  const arr = useSelector((store)=>store.watchList.list)
  console.log(arr)
  return (
    <div className=''>
      {
        arr.map((each)=>{
          return(
            <div key={each.id}>
              <CryptoPriceCard data={each}/>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default WatchList