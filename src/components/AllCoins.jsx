import { useState } from "react";

import { GetCryptoState } from "../context/cryptoContext";

import SearchCoin from "./Search/SearchCoin";
import { coins } from "../utils/coins";

import TabsComponent from "./TabsComponent";
import CoinTable from "./CoinTable";
import Pagination from "./Pagination";
import CoinGrid from "./CoinGrid";
import InfinityLoader from "./InfinityLoader";
const CoinsTable = () => {
  const { currency } = GetCryptoState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showGrid,setShowGrid] = useState(true)

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

  

  return (
    <div className="overflow-x-auto">
      <div className="flex  justify-center text-3xl md:text-4xl font-semibold mt-2">
        Top Cryptocurrency
      </div>

      <div className="flex  justify-center text-2xl font-semibold mt-2">
        <SearchCoin coins={coins} setFilteredCoins={setFilteredCoins} />
      </div>
      <div className="flex justify-center">
        <TabsComponent setShowGrid={setShowGrid}/>
      </div>

     { 
     loading && <InfinityLoader/>
     }
     {
        showGrid ? 
        <CoinGrid filteredCoins={filteredCoins}
        setFilteredCoins={setFilteredCoins}
        page={page}/> 
        :
        <CoinTable
          filteredCoins={filteredCoins}
          setFilteredCoins={setFilteredCoins}
          page={page}
        />

     }
      
        
      

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default CoinsTable;
