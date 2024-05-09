
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion} from 'framer-motion'
import { useDebugValue, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToWatchlist } from '../../Pages/Dashboard/WatchList/watchlistSlice';


const CryptoGridCard = ({data}) => {

    const [added,setAdded] =useState(false)
    const {
      id,
      symbol,
      name,
      image,
      current_price,
      market_cap,
      price_change_percentage_24h,
    } = data;

    const dispatch = useDispatch()

    const handleWishList =(coin)=>{
        setAdded(true)
        dispatch(addToWatchlist(coin))
    }
 

  return (
    <motion.div 
        initial={{ opacity: 0, y: 150, x:150 }}
          animate={{ opacity: 1, y: 0 ,x:0}}
          transition={{ delay: 0.25, duration: 0.75 }
    }>
          <div className="bg-gray-900 text-white rounded-lg p-4 shadow-lg">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2">
          {/* Replace with the appropriate icon for the cryptocurrency */}
          <img src={image}/>
        </div>
        <h2 className="text-2xl font-semibold">{name}</h2>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-bold">₹ {current_price}</span>
       
       <div className='flex flex-col items-center gap-4'>
        <span
                    className={
                        price_change_percentage_24h > 0
                        ? "text-green-500 font-bold border-green-500 border-2 rounded-xl px-4 py-1"
                        : "text-red-600 font-bold border-red-500 border-2 rounded-xl px-4 py-1"
                    }
                  >
          {price_change_percentage_24h.toFixed(2)}%
        </span>

        <span 
        onClick={()=>handleWishList(data)}
        className='px-2 py-1 m-2 border-2 rounded-full '>
          
          {
            added ?
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }}/>
            :
            <FontAwesomeIcon icon={faStar}/>
          }
        </span>
        </div>

      </div>
      <div className="text-lg">
       
        <p>Market Cap: {(market_cap/1000000000).toFixed()} B</p>
        
      </div>
    </div>
    </motion.div>
  )
}

export default CryptoGridCard