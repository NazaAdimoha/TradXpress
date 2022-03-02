import React from "react";
import Logo from "../../Images/TradExpress.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="p-4 mb-14 nav flex justify-between item-center h-18 bg-gradient-to-r from-purple-800 to-purple-900 text-white">
        <Link to="/" className="pl-8">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className="flex justify-between item-center pr-8">
          <Link to="/instant" className="p-4">
            <p>instant Buy/Sell</p>
          </Link>
          <Link to="/learn" className="p-4">
            <p>Learn</p>
          </Link>
          <Link to="/login" className="">
            <button className="bg-white border-current text-sm text-purple-700 mr-4 px-4 py-2 rounded-md self-center focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-medium tracking-wide">
              <p>Login</p>
            </button>
          </Link>
          <Link to="/getstarted" className="">
            <button className="bg-white border-current text-sm text-purple-700 px-4 py-2 rounded-md self-center focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-medium tracking-wide">
              Get Started
            </button>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
