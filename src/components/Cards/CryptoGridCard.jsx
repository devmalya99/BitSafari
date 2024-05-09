import React from 'react'
import { useDispatch } from 'react-redux';

const CryptoGridCard = ({data}) => {

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

  return (
    <div>
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
        <span
                    className={
                        price_change_percentage_24h > 0
                        ? "text-green-500 font-bold border-green-500 border-2 rounded-xl px-4 py-1"
                        : "text-red-600 font-bold border-red-500 border-2 rounded-xl px-4 py-1"
                    }
                  >
          {price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>
      <div className="text-lg">
       
        <p>Market Cap: {(market_cap/1000000000).toFixed()} B</p>
      </div>
    </div>
    </div>
  )
}

export default CryptoGridCard