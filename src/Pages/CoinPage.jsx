import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetCryptoState } from '../context/cryptoContext';
import { CoinList, SingleCoin } from '../config/api';
import axios from 'axios';

const CoinPage = () => {
  const [loading,setLoading] = useState()
  const {id} = useParams()
  const { currency } = GetCryptoState();
  
   const [coin,setCoin] = useState([])

  const fetchCoin = async() => {
      setLoading(true)
      const {data}= await axios.get(SingleCoin(id))
      setCoin(data)
      setLoading(false)
  }

  useEffect(()=>{
      fetchCoin()

  },[])

  console.log(coin)

  return (
    <div>{id.toUpperCase()}</div>
  )
}

export default CoinPage