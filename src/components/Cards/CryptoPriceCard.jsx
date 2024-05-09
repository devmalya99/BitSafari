import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { removeFromWatchList } from '../../Pages/Dashboard/WatchList/watchlistSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendDown, faArrowTrendUp, faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { coins } from '../../utils/coins';
import './style.css'

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

  const [isGreen,setGreen] = useState(price_change_percentage_24h>0)
 

  return (
    <div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
  <div className="flex justify-between overflow-x-auto border-2 border-blue-500 rounded-xl mb-2  ">
  <table className="table">

    <tbody>
      {/* row 1 */}
      <tr>
        
        <td className='border-2'>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image}/>
              </div>
            </div>
            <div>
            <h2 className="text-sm md:text-md lg:text-xl  font-semibold">
       {name}
     </h2>
              <div className="text-sm opacity-50">{symbol}</div>
            </div>
          </div>
        </td>
        <td className=''>
          <span className='border-2 text-left'>
            {current_price}
          </span>
          
          
        </td>
        

        
        <td>
        <span
          className={
            isGreen
              ? "text-green-500 font-bold border-green-500 border-2 rounded-xl px-4 py-1 text-sm md:text-md lg:text-xl "
              : "text-red-600 font-bold border-red-500 border-2 rounded-xl px-4 py-1 text-sm md:text-md lg:text-xl "
          }
        >
          {price_change_percentage_24h.toFixed(2)}%
        </span>

        <span className={`border-2 rounded-full px-2 py-1 ml-2 ${isGreen? 'border-green-600' : 'border-red-700'} `}>
            {
              isGreen ?
              <FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#12e60f"}} />
              :
              <FontAwesomeIcon icon={faArrowTrendDown} style={{color: "#d60000"}} />
            }
            
            </span>
        </td>


        <th>
          <button className="btn btn-ghost btn-xs">Add details</button>
        </th>
      </tr>
    </tbody>
   
    
  </table>
</div>
    
  </div>
  <div className="collapse-content"> 
    <div>
    <button className='hover:bg-red-500 px-2 sm:px-6  m-2 lg:px-8 rounded-full md:text-lg'><FontAwesomeIcon icon={faTrash}/></button>
<button className='hover:bg-green-700 px-2 sm:px-6 m-2 lg:px-8 rounded-full'><FontAwesomeIcon icon={faCartShopping}/></button>
    </div>
  </div>
</div>


    





  );
};

export default CryptoPriceCard;

{/* <motion.div className='flex justify-evenly  gap-4 mb-4 border-2 rounded-xl'

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





</motion.div> */}