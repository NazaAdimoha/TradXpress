import React from "react";
import { Link } from "react-router-dom";
const Buy = () => {
  return (
    <>
      <section className="block max-w-2xl h-auto p-4 mx-auto bg-pink-50 rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-center text-black font-bold text-4xl mb-10">
          Buy/Sell Instantly
        </h2>
        <div className="flex justify-center mb-10 ">
          <div className="">
            <Link to="/instant">
              <button className="font-bold  bg-gray-200 rounded-md px-8 py-3">
                Buy
              </button>
            </Link>
          </div>
          <div className="">
            <Link to="/sell">
              <button className="font-bold bg-white rounded-md px-8 py-3">
                Sell
              </button>
            </Link>
          </div>
        </div>

        <form action="">
          <div className="mb-10">
            <label
              className="block text-gray-700 dark:text-gray-200 font-medium"
              for="to-buy"
            >
              Coin to Buy
            </label>

            <div className="mt-2">
              <select
                name="Bitcoin (BTC)"
                id="btc"
                className="block w-full px-3 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="">Bitcoin (BTC)</option>
                <option value="Eth">Ethereum (Eth)</option>
                <option value="Ada">Cardano (Ada)</option>
                <option value="Xrp">Ripple (Xrp)</option>
              </select>
            </div>

            <label
              htmlFor="currency"
              className="text-gray-700 dark:text-gray-200 block font-medium"
              for="currency"
            >
              Currency
            </label>

            <div className="mt-2">
              <select
                name="Bitcoin (BTC)"
                id="btc"
                className="block w-full px-3 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="">Naira (NGN)</option>
                <option value="CAD">Canadian Dollar (CAD)</option>
                <option value="GBP">Great British Pounds (GBP)</option>
                <option value="Yen">Japanese Yen (Yen)</option>
              </select>
            </div>

            <label
              htmlFor="amount"
              className="text-gray-700 dark:text-gray-200"
              for="amount"
            >
              Amount
            </label>
            <input
              type="text"
              id="ngn"
              name="Ngn"
              placeholder="NGN | 3,000,000.00"
              className="mb-12 block w-full px-3 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </form>

        <button className="px-3 py-4 w-full rounded-md text-white bg-purple-700 m-auto hover:bg-purple-800">
          Continue
        </button>
      </section>
    </>
  );
};

export default Buy;
