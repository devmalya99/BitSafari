import React, { useEffect, useState } from "react";

import TemporaryDrawer from "./drawer";
import "./style.css";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GetCryptoState } from "../../../context/cryptoContext";
import logo from "../../../assets/crypto logo.png";
function Header() {
  
  const {currency, setCurrency
  }  = GetCryptoState()
  console.log(currency)


  return (
    <div className="header">
       <Link to="/" className="w-full py-5 flex items-center ">
              <img src={logo} className="hidden ml-2 h-8 dark:block" />
              <span className="text-yellow-500 text-xl font-mono  font-bold mr-12">
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
        
        <Link to="/">
          <p className="">Home</p>
        </Link>
        <Link to="/compare">
          <p className="">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;