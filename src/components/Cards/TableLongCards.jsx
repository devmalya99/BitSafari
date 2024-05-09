import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addToWatchlist } from '../../Pages/Dashboard/WatchList/watchlistSlice'

const TableLongCards = ({coin}) => {

    const dispatch = useDispatch()
    const [added,setAdded] =useState(false)

    const handleWishList =(coin)=>{
        setAdded(true)
        dispatch(addToWatchlist(coin))
    }
  return (
    
        <motion.tbody
              key={coin.id}
              className="hover:bg-gray-900"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* row 1 */}
              <tr>
                <th>{coin.market_cap_rank}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={coin.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{coin.name}</div>
                      <div className="text-lg opacity-50">{coin.symbol}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm text-lg">
                    {/* {currency === "INR" ? "₹" : "$"} */}
                    {coin.current_price}
                  </span>
                </td>
                <td
                  className={
                    coin.market_cap_change_percentage_24h.toFixed(2) > 0
                      ? "text-green-500 font-bold "
                      : "text-red-600 font-bold"
                  }
                >
                  <span
                    className={
                      coin.market_cap_change_percentage_24h > 0
                        ? "text-green-500 font-bold border-green-500 border-2 rounded-xl px-4 py-1"
                        : "text-red-600 font-bold border-red-500 border-2 rounded-xl px-4 py-1"
                    }
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </td>
                <td
                  className={
                    coin.market_cap_change_percentage_24h.toFixed(2) > 0
                      ? "text-green-500 font-bold"
                      : "text-red-600 font-bold"
                  }
                >
                  {coin.ath_change_percentage.toFixed(2)}%
                </td>
                <td
                  className={
                    coin.market_cap_change_percentage_24h > 0
                      ? "text-green-500 font-bold"
                      : "text-red-600 font-bold"
                  }
                >
                  {coin.atl_change_percentage.toFixed(2)}%
                </td>

                <th>
                  <span className="badge badge-ghost badge-sm text-lg">
                    {/* {currency === "INR" ? "₹" : "$"} */}
                    {(coin.market_cap / 1000000000).toFixed(2)}B
                  </span>
                </th>

                <th>
                <span 
        onClick={()=>handleWishList(coin)}
        className='px-2 py-1 m-2 border-2 rounded-full '>
          
          {
            added ?
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }}/>
            :
            <FontAwesomeIcon icon={faStar}/>
          }
        </span>
                </th>
              </tr>
            </motion.tbody>
    
  )
}

export default TableLongCards