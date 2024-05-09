import React from 'react';
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { removeFromWatchList } from '../../Pages/Dashboard/WatchList/watchlistSlice';
const CryptoPriceCard = ({ data }) => {
    const dispatch=useDispatch()
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    price_change_percentage_24h,
  } = data;


  const handleRemove =(id)=>{
    dispatch(removeFromWatchList(id))
  }


  return (

<motion.div className='flex justify-evenly mb-4 border-2 rounded-xl'

initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>

<div className='flex items-center justify-start ml-4'>
<img src={image} alt={`${name} logo`} className="w-12 h-auto" />
</div>

<div className='flex items-center justify-start'>
<h2 className="text-lg font-semibold">
       {name} ({symbol.toUpperCase()})
     </h2>
</div>


<div className='flex items-center justify-start'>
<span
          className={
            price_change_percentage_24h> 0
              ? "text-green-500 font-bold border-green-500 border-2 rounded-xl px-4 py-1"
              : "text-red-600 font-bold border-red-500 border-2 rounded-xl px-4 py-1"
          }
        >
          {price_change_percentage_24h.toFixed(2)}%
        </span>
</div>

<div className='flex items-center justify-end'>
<div className="text-lg font-bold">₹{current_price}</div>
</div>

<div className='flex items-center justify-end'>
<button className="text-md border-2 rounded-xl bg-rose-600 py-1 px-2 mr-2 font-bold"
onClick={()=>handleRemove(id)}
>Remove</button>
</div>

</motion.div>
  );
};

export default CryptoPriceCard;