import React from "react";
import play from "../../Images/Group 52.svg";
import play2 from "../../Images/Group 28.svg";

import GetStartedHome from "./GetStartedHome";
import CustomerReview from "./CustomerReview";

const Main = () => {
  return (
    <>
      <div className="bg-slate-100 p-4 mb-16">
        <h3 className="text-center font-bold text-4xl font-sans text-lg p-4 mb-14">
          Why do people get involved with Cryptocurrencies?
        </h3>
        <div className="block  md:flex md:justify-center p-4 rounded-xl">
          <div className="w-80 h-85 bg-white">
            <img className="mb-10" src={play} alt="" />
            <h3 className="text-center mb-2">Easy Mode of Payment</h3>
            <p className="items-center p-4">
              People can now easily send and receive money from anywhere in the
              world to purchase goods and pay for services
            </p>
          </div>

          <div className="w-80 h-85 bg-white md:ml-8 md:mr-8 rounded-xl">
            <img className="mb-10" src={play2} alt="" />
            <h3 className="text-center mb-2">Financial Freedom</h3>
            <p className="items-center p-4">
              Just like the internet no single entity controls the Crypto
              network which provides users transparency and privacy, which puts
              you in absolute control of your money.
            </p>
          </div>

          <div className="w-80 h-85 bg-white rounded-xl">
            <img className="mb-10" src={play} alt="" />
            <h3 className="text-center mb-2">Investment</h3>
            <p className="items-center p-4">
              The constant demand as made Cryptocurrecies a Digital Gold used
              for alternative store of wealth on long term investments.
            </p>
          </div>
        </div>

        <div className="text-center mb-14">
          <button className="px-8 py-3 border-gray-900 font-medium tracking-wide text-purple-700 capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-stone-700 focus:outline-none focus:ring focus:ring-stone-800 focus:ring-opacity-80">
            Learn More
          </button>
        </div>

        <div className="text-center mb-14">
          <h2 className="text-4xl">
            Buy and Sell your Cryptocurrency in 3 simple steps
          </h2>
        </div>

        <div>
          <div className="flex justify-evenly mb-10">
            <div className="flex">
              <div className="text-black bg-purple-800 p-3 rounded-md h-12 w-8 shadow-md shadow-purple-500 opacity-80">
                1
              </div>
              <div className="ml-8">
                <h3 className="font-bold text-2xl mb-10">
                  Create a free Account
                </h3>
                <p className="mb-10">
                  Sign up for your free TradExpress Wallet on web, iOS, or
                  Android devices and follow our <br /> easy process to set up
                  your profile
                </p>
              </div>
            </div>
            <div>
              <img src={play} alt="" />
            </div>
          </div>

          <div className="flex justify-evenly mb-10">
            <div>
              <img src={play2} alt="" />
            </div>

            <div className="flex">
              <div className="text-black bg-purple-800 p-3 rounded-md h-12 w-8 shadow-md shadow-purple-500 opacity-80">
                2
              </div>
              <div className="ml-8">
                <h3 className="font-bold text-2xl mb-10">Deposit</h3>
                <p className="mb-10">
                  Choose your preferred deposit option like bank transfer,
                  credit/debit card <br /> or send digital asset directly to
                  your wallet for easy funding/withdrawal.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly mb-10 mr-12">
            <div className="flex">
              <div className="text-black bg-purple-800 p-3 rounded-md h-12 w-8 shadow-md shadow-purple-500 opacity-80">
                3
              </div>
              <div className="ml-8">
                <h3 className="font-bold text-2xl mb-10">Buy/ Sell Crypto</h3>
                <p className="mb-10">
                  Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it{" "}
                  <br />
                  in your wallet or send it easily to friends and family.
                </p>
              </div>
            </div>

            <div>
              <img src={play} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 text-center">
        <GetStartedHome />

        <CustomerReview />
      </div>
    </>
  );
};

export default Main;
