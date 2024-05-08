import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/crypto logo.png";
import { GetCryptoState } from "../context/cryptoContext";
const Header = () => {
  const [open, setOpen] = useState(false);
 const {currency, setCurrency
 }  = GetCryptoState()
 console.log(currency)
  return (
    <header className={`flex w-full items-center bg-transparent`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link to="/" className="w-full py-5 flex items-center ">
              <img src={logo} className="hidden ml-2 h-8 dark:block" />
              <span className="text-yellow-500 text-xl font-mono px-2 font-bold ">
                Bitsafari
              </span>
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute z-50 right-4 top-full w-full max-w-[250px] rounded-lg bg-slate-800  px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#">Home</ListItem>
                  <ListItem NavLink="/#">Payment</ListItem>
                  <ListItem NavLink="/#">Signup</ListItem>
                  <ListItem NavLink="/#">Login</ListItem>
                </ul>
              </nav>
            </div>
            <div className="justify-end pr-16 sm:flex lg:pr-0">
              <select className="select select-accent w-full max-w-xs mr-4"
              value={currency}
              onChange={(e)=>setCurrency(e.target.value)}>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <Link
          to={NavLink}
          className="flex py-2 z-10 text-base font-medium lg:ml-12 lg:inline-flex hover:border-b-2
          shadow-md p-2 hover:shadow-neutral-400 "
        >
          {children}
        </Link>
      </li>
    </>
  );
};
