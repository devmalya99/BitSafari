import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../../Pages/Dashboard/WatchList/watchlistSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faCartShopping,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import BuyModal from "../BuyModal/BuyModal";
import { GetCryptoState } from "../../context/cryptoContext";

const CryptoPriceCard = ({ data }) => {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    total_volume,
    price_change_percentage_24h,
    ath_change_percentage,
  } = data;
   
  const dispatch = useDispatch()
  const currency = GetCryptoState()
  const [isGreen, setGreen] = useState(price_change_percentage_24h > 0);

  return (
    <div className="collapse w-screen bg-[#111]">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <div className="flex justify-between overflow-x-auto border-2 border-blue-500 rounded-xl mb-2  ">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr>
                <td className="">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img src={image} />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-semibold">
                        {name}
                      </h2>
                      <span className="text-left">
                        {currency==='INR'?'₹' : '$'}{current_price}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <span
                    className={
                      isGreen
                        ? "text-green-500 font-bold border-green-500 border-2 rounded-xl px-2 py-1 text-sm md:text-md lg:text-xl"
                        : "text-red-600 font-bold border-red-500 border-2 rounded-xl px-2 py-1 text-sm md:text-md lg:text-xl"
                    }
                  >
                    {price_change_percentage_24h}%
                  </span>
                </td>

                <div className="flex mt-1">
                  <td className="hidden md:flex flex-col ">
                    <span className="text-gray-600 mb-1">From_ATH</span>
                    <div
                      className={
                        isGreen
                          ? "flex justify-center text-green-500 font-bold border-green-500 border-2 rounded-xl px-2 py-2"
                          : "text-red-600 font-bold border-red-500 border-2 rounded-xl px-2 py-2 sm:px-4 flex justify-center"
                      }
                    >
                      {
                        ath_change_percentage<0 &&
                        <span className="text-md md:text-md lg:text-md">{(ath_change_percentage.toFixed(0))}%</span>
                        
                      }
                      
                      
                    </div>
                  </td>

                  <td className="hidden md:flex  flex-col">
                    <span className="text-gray-600 mb-2">Total Volume</span>
                    <span className="text-left text-lg">{(total_volume/1000000000).toFixed()} B</span>
                  </td>

                  <td className="hidden md:flex    flex-col">
                    <span className="text-gray-600 mb-2">Capitalisation</span>
                    <span className="text-left text-lg">₹{(market_cap/1000000000).toFixed()} B</span>
                  </td>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="collapse-content">

        <div className="flex">

        <div className="Buy Div flex items-center mt-2 border-2 bg-[#111] rounded-xl px-4 py-1 cursor-pointer  shadow-md ">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="xl"
              style={{ color: "#63E6BE" }}
            />
            <div className="btn text-2xl ml-2" onClick={()=>document.getElementById('my_modal_4').showModal()}>Buy</div>
            
          </div>


          <button className="border-2 border-red-500 px-2 sm:px-6 mt-2 ml-2 lg:px-8 rounded-2xl md:text-lg "
          onClick={()=>dispatch(removeFromWatchList(id))}>
            Remove From Watchlist
          </button>
          
        </div>
      </div>
      <BuyModal price={current_price}/>
    </div>
  );
};

export default CryptoPriceCard;

{
  /* <motion.div className='flex justify-evenly  gap-4 mb-4 border-2 rounded-xl'

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
          {price_change_percentage_24h}%
        </span>
</div>

<div className='flex items-center justify-end'>
<div className="text-sm md:text-md lg:text-xl font-bold">₹{current_price}</div>
</div>





</motion.div> */
}
