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
import TableLongCards from "./Cards/TableLongCards";

const CoinTable = ({ filteredCoins, setFilteredCoins, page }) => {
  const { currency } = GetCryptoState();

  const [sortOrder, setSortOrder] = useState("asc");
  const [show, setShow] = useState(false);

  const [added, setAdded] = useState(false);
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
            
              <TableLongCards key={coin.id} coin={coin} />
           
          
          );
        })}
      </table>
    </>
  );
};

export default CoinTable;
