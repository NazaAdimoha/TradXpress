import React from "react";
import playstore from "../../Images/Group 68.svg";
import googleplay from "../../Images/Group 69.svg";
import Navbar from "../../component/layout/Navbar";
import Main from "./Main";
import Footer from "../../component/layout/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="p-8 h-auto bg-gradient-to-r from-purple-800 to-purple-900">
        <Navbar />
        <div className="p-8 h-auto bg-gradient-to-r from-purple-800 to-purple-900">
          <div className=" pl-8">
            <h3 className="mb-14 text-white text-3xl">
              Buy, sell and manage your <br /> Crypto on TradExpress.
            </h3>
            <div>
              <p className="mb-10 text-white">
                Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP
                with NGN.
              </p>
            </div>

            <Link to="/getstarted">
              <button className="mb-12 px-28 py-3 bg-white purple-600 rounded-2xl text-black">
                Get Started
              </button>
            </Link>

            <div className=" flex cursor-pointer">
              <img src={playstore} alt="playstore-icon" />
              <img className="ml-3" src={googleplay} alt="googleplay-icon" />
            </div>
          </div>
        </div>
      </div>
      <Main />

      <Footer />
    </>
  );
};

export default Home;
