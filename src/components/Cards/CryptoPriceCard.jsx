import React from 'react';
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { removeFromWatchList } from '../../Pages/Dashboard/WatchList/watchlistSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';


const CryptoPriceCard = ({ data }) => {
    
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    price_change_percentage_24h,
  } = data;

  return (

<motion.div className='flex justify-evenly  gap-4 mb-4 border-2 rounded-xl'

initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>

<div className='flex items-center justify-start ml-4'>
<img src={image} alt={`${name} logo`} className="w-12 h-auto sm:w-14 md:w-20 lg:w-24" />
</div>

<div className='flex items-center justify-start'>
<h2 className="text-sm md:text-md lg:text-xl  font-semibold">
       {name}
     </h2>
</div>

<div className='flex items-center justify-start'>
<span
          className={
            price_change_percentage_24h> 0
              ? "text-green-500 font-bold border-green-500 border-2 rounded-xl px-4 py-1 text-sm md:text-md lg:text-xl "
              : "text-red-600 font-bold border-red-500 border-2 rounded-xl px-4 py-1 text-sm md:text-md lg:text-xl "
          }
        >
          {price_change_percentage_24h.toFixed(2)}%
        </span>
</div>

<div className='flex items-center justify-end'>
<div className="text-sm md:text-md lg:text-xl font-bold">₹{current_price}</div>
</div>



<button className='hover:bg-red-500 px-2 sm:px-6  m-2 lg:px-8 rounded-full md:text-lg'><FontAwesomeIcon icon={faTrash}/></button>
<button className='hover:bg-green-700 px-2 sm:px-6 m-2 lg:px-8 rounded-full'><FontAwesomeIcon icon={faCartShopping}/></button>

</motion.div>
  );
};

export default CryptoPriceCard;