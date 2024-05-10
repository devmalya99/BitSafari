import {
  faArrowTrendDown,
  faArrowTrendUp,
  faCartShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useDebugValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchList } from "../../Pages/Dashboard/WatchList/watchlistSlice";
import BuyModal from "../BuyModal/BuyModal";

const CryptoGridCard = ({ data }) => {
  
  const list = useSelector((store)=>store.watchList.list)
  console.log(list)
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    price_change_percentage_24h,
    ath_change_percentage,
    atl_change_percentage,
  } = data;

  
  const isGreen = price_change_percentage_24h > 0;
const dispatch = useDispatch();
  const handleWishList = (coin) => {
    if(list.includes(coin))
      {
        dispatch(removeFromWatchList(coin.id));
      }else{
        dispatch(addToWatchlist(coin));
      }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 150, x: 150 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.25, duration: 0.75 }}
    >
      <div className="border-2  bg-gray-900 text-white rounded-lg p-4 shadow-lg">
       
        <div className="name-div mb-8 flex justify-between">
          <div className="w-8 h-8 rounded-full flex mr-2">
            <img src={image} />
            <h2 className="text-2xl font-semibold ml-2">
              {name.length > 6 ? symbol.toUpperCase() : name}
            </h2>
          </div>

          <div className="trend-div flex gap-4 ">
            <div
              className={`flex Price-trend border-2 rounded-full px-2 items-center ${
                isGreen ? "border-green-600" : "border-red-600"
              }`}
            >
              {isGreen ? (
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  style={{ color: "#12e60f" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faArrowTrendDown}
                  style={{ color: "#d60000" }}
                />
              )}
            </div>

            <span
              className={
                price_change_percentage_24h > 0
                  ? "text-green-500 font-bold border-green-500 border-2 rounded-xl px-4 py-1"
                  : "text-red-600 font-bold  border-red-500 border-2 rounded-xl px-4 py-1"
              }
            >
              {price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        </div>

        <div className="price-cap-div flex justify-between mb-6">
          <div>
            {" "}
            <span className="text-xl font-bold">₹ {current_price}</span>
          </div>
          <div>
            <p className="text-lg">
              Cap: {(market_cap / 1000000000).toFixed()} B
            </p>
          </div>
        </div>

        <div className="ath flex justify-between mb-4">
          <div>
            <span className="text-red-500 font-bold border-red-500 border-2 rounded-xl px-1 py-1 cursor-pointer">
              {ath_change_percentage.toFixed(2)}% Down From ATH
            </span>
          </div>
        </div>

        <div className="atl flex justify-between mb-6">
          <div>
            <span className="text-green-500 font-bold border-green-500 border-2 rounded-xl px-1 py-1 cursor-pointer">
              {atl_change_percentage.toFixed(2)}% Up From ATL
            </span>
          </div>
        </div>

        <div className="footer-div flex justify-evenly border-t-2">
          <div className="Buy Div flex items-center mt-2 border-2 bg-[#111] rounded-xl px-4 py-1 cursor-pointer  shadow-md ">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="xl"
              style={{ color: "#63E6BE" }}
            />
            <button className="btn text-2xl ml-2" onClick={()=>document.getElementById('my_modal_4').showModal()}>Buy</button>
            
          </div>

          <div className="mt-3">
            <span
              onClick={() => handleWishList(data)}
              className="flex justify-center hover:border-yellow-300 px-6 py-3 border-2 rounded-xl "
            >
              {list.includes(data) ? (
                <FontAwesomeIcon icon={faStar} size='xl' style={{ color: "#FFD43B" }} />
              ) : (
                <FontAwesomeIcon icon={faStar} size='xl'/>
              )}
            </span>
          </div>
        </div>
<BuyModal/>
        
      </div>
    </motion.div>
  );
};

export default CryptoGridCard;
