import { useEffect, useState } from "react";

import { GetCryptoState } from "../context/cryptoContext";

import SearchCoin from "./Search/SearchCoin";


import TabsComponent from "./TabsComponent";
import CoinTable from "./CoinTable";
import Pagination from "./Pagination";
import CoinGrid from "./CoinGrid";
import InfinityLoader from "./InfinityLoader";
import { CoinList } from "../config/api";
import axios from "axios";
const CoinsTable = () => {
  const { currency } = GetCryptoState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showGrid,setShowGrid] = useState(true)

 
  const [filteredCoins, setFilteredCoins] = useState([]);

  const fetchCoins = async() => {
      setLoading(true)
      const {data}= await axios.get(CoinList(currency))
      setFilteredCoins(data)
      setLoading(false)
  }

  useEffect(()=>{
      fetchCoins()

  },[currency])

  let totalPages
  if(filteredCoins)
    {
      totalPages = filteredCoins.length / 10;

    }

 

  

  

  return (
    <div className="overflow-x-auto">
      <div className="flex  justify-center text-3xl md:text-4xl font-semibold mt-2">
        Top Cryptocurrency
      </div>

      <div className="flex  justify-center text-2xl font-semibold mt-2">
        <SearchCoin coins={filteredCoins} setFilteredCoins={setFilteredCoins} />
      </div>
      <div className="flex justify-center">
        <TabsComponent setShowGrid={setShowGrid}/>
      </div>

     { 
     loading && <InfinityLoader/>
     }
     {!loading && filteredCoins.length > 0 && (
        <div>
          {
          showGrid ? (
            <CoinGrid
              filteredCoins={filteredCoins}
              setFilteredCoins={setFilteredCoins}
              page={page}
            />
          ) : (
            <CoinTable
              filteredCoins={filteredCoins}
              setFilteredCoins={setFilteredCoins}
              page={page}
            />
          )}
      
        
      

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )}
  </div>
  )
};

export default CoinsTable;
