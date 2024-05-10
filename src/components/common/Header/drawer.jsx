import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GetCryptoState } from "../../../context/cryptoContext";
import { useSelector } from "react-redux";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const wishlist = useSelector((store)=>store.watchList.list)

  const {currency, setCurrency
  }  = GetCryptoState()
  console.log(currency)


  return (
    <div className="flex ">
        <div className="justify-end pr-4">
              <select className="select select-accent w-full max-w-xs mr-6"
              value={currency}
              onChange={(e)=>setCurrency(e.target.value)}>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>

       


      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <Link to="/home">
            <p className="text-2xl rounded-xl px-2 py-1 mb-4 mt-8 text-yellow-500 font-bold shadow-gray-700 shadow-sm hover:border-e-2">Home</p>
          </Link>
          <Link to="/compare">
            <p className="text-2xl px-2 py-1 mb-4 rounded-xl text-yellow-500 font-bold shadow-gray-700 shadow-sm hover:border-e-2">Compare</p>
          </Link>

          <div className="indicator">
  <span className="indicator-item badge badge-secondary">{wishlist.length}</span> 
  <Link to="/watchlist">
            <p className="text-2xl px-2 py-1 mb-4 rounded-xl text-yellow-500 font-bold shadow-gray-700 shadow-sm hover:border-e-2">Watchlist</p>
          </Link>
    </div> 

          


          <Link to="/dashboard">
            <p className="text-2xl px-2 py-1 mb-4 rounded-xl text-yellow-500 font-bold shadow-gray-700 shadow-sm hover:border-e-2">Dashboard</p>
          </Link>

          <Link to="/signup">
            <p className="text-2xl px-2 py-1 mb-4 rounded-xl text-yellow-500 font-bold shadow-gray-700 shadow-sm hover:border-e-2">Get In</p>
          </Link>
          
        </div>
      </Drawer>
    </div>
  );
}