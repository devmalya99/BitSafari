import { useState } from "react";

import { GetCryptoState } from "../context/cryptoContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faSortUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { coins } from "../utils/coins";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../Pages/Dashboard/WatchList/watchlistSlice";

const CoinTable = ({ filteredCoins, setFilteredCoins, page }) => {
  const { currency } = GetCryptoState();

  const [sortOrder, setSortOrder] = useState("asc");
  const [show, setShow] = useState(false);

  const [isWishList, setWishList] = useState(true);
  const dispatch = useDispatch();

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

  const handleWishList = (obj) => {
    dispatch(addToWatchlist(obj));
    alert("added to wishlist");
  };

  return (
    <>
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

            <th className="text-lg cursor-pointer">Add to List</th>
          </tr>
        </thead>
        {filteredCoins.slice((page - 1) * 10, page * 10).map((coin) => {
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
                    {currency === "INR" ? "₹" : "$"}
                    {(coin.market_cap / 1000000000).toFixed(2)}B
                  </span>
                </th>

                <th>
                  <span
                    className="flex justify-center text-lg"
                    onClick={() => handleWishList(coin)}
                  >
                    {isWishList ? (
                      <FontAwesomeIcon
                        icon={faStar}
                        size="xl"
                        style={{ color: "#FFD43B" }}
                      />
                    ) : (
                      <FontAwesomeIcon icon={faStar} size="lg" />
                    )}
                  </span>
                </th>
              </tr>
            </motion.tbody>
          );
        })}
      </table>
    </>
  );
};

export default CoinTable;
