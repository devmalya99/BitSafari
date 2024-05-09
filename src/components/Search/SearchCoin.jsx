import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { coins } from '../../utils/coins'
const SearchCoin = ({setFilteredCoins}) => {

    const [searchText, setSearchText] = useState("");



    const handleSearch = (e) => {
        setSearchText(e.target.value.toLowerCase());
        const searchedList = coins.filter(
          (each) =>
            each.name.toLowerCase().includes(searchText) ||
            each.symbol.includes(searchText)
        );
    
        setFilteredCoins(searchedList);
      };


  return (
    <div className="flex justify-between border-2 rounded-xl w-full lg:w-[700px] py-2 mt-8 ">
      
        <input
        className="ml-4 text-2xl outline-none"
        placeholder="Search Coins .."
        onChange={handleSearch}
      />
      <div className="px-2 mr-6 text-xl">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      
      </div>
  )
}

export default SearchCoin