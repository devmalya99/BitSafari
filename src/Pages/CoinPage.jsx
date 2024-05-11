import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetCryptoState } from '../context/cryptoContext';
import { CoinList, SingleCoin } from '../config/api';
import axios from 'axios';
import { settingCoinObject } from '../functions/convertObject';
import InfinityLoader from '../components/InfinityLoader'
import CryptoPriceCard from '../components/Cards/CryptoPriceCard';
const CoinPage = () => {
  const [loading,setLoading] = useState()
  const {id} = useParams()
  const { currency } = GetCryptoState();
  
   const [coinData,setCoinData] = useState([])

  const fetchCoin = async() => {
      setLoading(true)
      const {data}= await axios.get(SingleCoin(id))
      settingCoinObject(data,setCoinData)
      setLoading(false)
      console.log(data)
  }

  useEffect(()=>{
      fetchCoin()

  },[])

 

  return (

    <div>
      {
        loading ? <InfinityLoader/>: 
        <div>
          <CryptoPriceCard data={coinData}/>
          
          </div>
      }
     

    </div>
  )
}

export default CoinPage