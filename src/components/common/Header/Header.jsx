import React, { useEffect, useState } from "react";

import TemporaryDrawer from "./drawer";
import "./style.css";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GetCryptoState } from "../../../context/cryptoContext";
import logo from "../../../assets/crypto logo.png";
import { useSelector } from "react-redux";
function Header() {
  const wishlist = useSelector((store)=>store.watchList.list)

  const {currency, setCurrency
  }  = GetCryptoState()
  console.log(currency)


  return (
    <div className="header">
       <Link to="/" className="w-full flex items-center ">
              <img src={logo} className="hidden ml-2 h-8 dark:block" />
              <span className="text-yellow-500 text-xl font-mono  font-bold mr-12 md:text-3xl">
                Bitsafari
              </span>
            </Link>
      <div className="links">

      <div className="justify-end pr-4">
              <select className="select select-accent text-yellow-400 w-full max-w-xs mr-8"
              value={currency}
              onChange={(e)=>setCurrency(e.target.value)}>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
        
        <Link to="/home">
          <p className="text-lg shadow-sm shadow-gray-700 rounded-xl px-4 py-1 hover:shadow-gray-500 hover:text-xl">Home</p>
        </Link>
        <Link to="/compare">
          <p className="text-lg shadow-sm shadow-gray-700 rounded-xl px-4 py-1 hover:shadow-gray-500 hover:text-xl">Compare</p>
        </Link>


        <div className="indicator">
  <span className="indicator-item badge badge-secondary">{wishlist.length}</span> 
  <Link to="/watchlist">
            <p className="text-lg shadow-sm shadow-gray-700 rounded-xl px-4 py-1 hover:shadow-gray-500 hover:text-xl">Watchlist</p>
          </Link>
    </div> 


        <Link to="/dashboard">
          <button className="text-lg shadow-sm shadow-gray-700 rounded-xl px-4 py-1 hover:shadow-gray-500 hover:text-xl">Dashboard</button>
        </Link>

        <Link to="/dashboard">
          <button className="text-lg shadow-sm shadow-gray-700 rounded-xl px-4 py-1 hover:shadow-gray-500 hover:text-xl">GetIn</button>
        </Link>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;