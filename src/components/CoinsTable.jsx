import { Input, useScrollTrigger } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { GetCryptoState } from "../context/cryptoContext";
import axios from "axios";
import SortToastify from "./sortToastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faMagnifyingGlass, faSortDown, faSortUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import SearchCoin from "./Search/SearchCoin";
import { coins } from "../utils/coins";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../Pages/Dashboard/WatchList/watchlistSlice";
import myStore from "../Redux/store";
import TabsComponent from "./TabsComponent";
const CoinsTable = () => {
  const { currency } = GetCryptoState();
  const [loading, setLoading] = useState(false);
  
  const [sortOrder, setSortOrder] = useState("asc");
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [isWishList,setWishList] = useState(true)
  const dispatch = useDispatch()
  // const [coins,setCoins] = useState([])

  // const fetchCoins = async() => {
  //     setLoading(true)
  //     const {data}= await axios.get(CoinList(currency))
  //     setCoins(data)
  //     setLoading(false)
  // }

  // useEffect(()=>{
  //     fetchCoins()

  // },[currency])

  

  const totalPages = coins.length / 10;

  const [filteredCoins, setFilteredCoins] = useState(coins);

  const handleSort = (prop, sortOrder) => {
    setShow(true);

    const sorted = [...coins].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[prop] - b[prop];
      } else {
        return b[prop] - a[prop];
      }
    });

    setFilteredCoins(sorted);

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  console.log(coins);

  const handleClick = (currentPage) => {
    setPage(currentPage);
    window.scroll(0, 550);
  };
  const handleWishList =(obj)=>{
    
    dispatch(addToWatchlist(obj))
    alert('added to wishlist')
    
    
  }

  

  return (
    <div className="overflow-x-auto">
      <div className="flex  justify-center text-3xl md:text-4xl font-semibold mt-2">
        Top Cryptocurrency
      </div>

      <div className="flex  justify-center text-2xl font-semibold mt-2">
      <SearchCoin setFilteredCoins={setFilteredCoins}/>
      </div>
      <div className="flex justify-center">
      
      <TabsComponent/>
        </div>

      

      

      {loading ? (
        <div className="flex justify-center text-center">
          <span className=" loading loading-infinity loading-lg text-warning"></span>
        </div>
      ) : (
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-yellow-600 text-black">
              <th
                className="text-lg cursor-pointer"
                onClick={() => handleSort("market_cap_rank", sortOrder)}
              >
                Rank{" "}
                {sortOrder === "asc" ? (
                  <FontAwesomeIcon icon={faSortDown} />
                ) : (
                  <FontAwesomeIcon icon={faSortUp} />
                )}
              </th>
              <th className="text-lg">Name</th>

              <th
                className="text-lg cursor-pointer"
                onClick={() => handleSort("current_price", sortOrder)}
              >
                Price{" "}
                {sortOrder === "asc" ? (
                  <FontAwesomeIcon icon={faSortDown} />
                ) : (
                  <FontAwesomeIcon icon={faSortUp} />
                )}
              </th>

              <th
                className="text-lg cursor-pointer"
                onClick={() =>
                  handleSort("price_change_percentage_24h", sortOrder)
                }
              >
                24h %{" "}
                {sortOrder === "asc" ? (
                  <FontAwesomeIcon icon={faSortDown} />
                ) : (
                  <FontAwesomeIcon icon={faSortUp} />
                )}
              </th>

              <th
                className="text-lg cursor-pointer"
                onClick={() => handleSort("ath_change_percentage", sortOrder)}
              >
                To Ath%{" "}
                {sortOrder === "asc" ? (
                  <FontAwesomeIcon icon={faSortDown} />
                ) : (
                  <FontAwesomeIcon icon={faSortUp} />
                )}
              </th>

              <th
                className="text-lg cursor-pointer"
                onClick={() => handleSort("atl_change_percentage", sortOrder)}
              >
                From Atl%{" "}
                {sortOrder === "asc" ? (
                  <FontAwesomeIcon icon={faSortDown} />
                ) : (
                  <FontAwesomeIcon icon={faSortUp} />
                )}
              </th>

              <th
                className="text-lg cursor-pointer"
                onClick={() => handleSort("market_cap", sortOrder)}
              >
                MarketCap
                {sortOrder === "asc" ? (
                  <FontAwesomeIcon icon={faSortDown} />
                ) : (
                  <FontAwesomeIcon icon={faSortUp} />
                )}
              </th>

              <th
                className="text-lg cursor-pointer"  
              >
               Add to List
              </th>


            </tr>
          </thead>
          {filteredCoins.slice((page - 1) * 10, page * 10).map((coin) => {
            return (
              <motion.tbody key={coin.id}
              className="hover:bg-gray-900"
              initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}>
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
                      {currency === "INR" ? "₹" : "$"}
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
                    <span className={
                      coin.market_cap_change_percentage_24h> 0
                        ? "text-green-500 font-bold border-green-500 border-2 rounded-xl px-4 py-1"
                        : "text-red-600 font-bold border-red-500 border-2 rounded-xl px-4 py-1"
                    }>
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
                      coin.market_cap_change_percentage_24h> 0
                        ? "text-green-500 font-bold"
                        : "text-red-600 font-bold"
                    }
                  >
                    {coin.atl_change_percentage.toFixed(2)}%
                  </td>

                  <th>
                    <span className="badge badge-ghost badge-sm text-lg">
                      {currency === "INR" ? "₹" : "$"}
                      {(coin.market_cap / 1000000000).toFixed(2)}B
                    </span>
                  </th>

                  <th>
                    <span className="flex justify-center text-lg"
                    onClick={()=>handleWishList(coin)}
                    >
                      {
                        isWishList ?
                        <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#FFD43B",}} />
                        :
                        <FontAwesomeIcon icon={faStar} size="lg" />

                      }
                    
                    </span>
                  </th>
                </tr>
              </motion.tbody>
            );
          })}
        </table>
      )}

      <div className="join flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handleClick(i + 1)}
            className={`join-item btn btn-md  ${
              page === i + 1 ? "btn-active" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoinsTable;
