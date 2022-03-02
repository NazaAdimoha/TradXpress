import React from "react";
import { Link } from "react-router-dom";
const Individual = () => {
  return (
    <>
      <div className="max-w-4xl max-h-8xl p-6 mx-auto bg-pink-50 rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-4xl mb-12 text-center">Welcome!</h1>
        <div className="flex justify-center mb-10 ">
          <div className="">
            <Link to="/getstarted">
              <button className="font-bold bg-white rounded-md px-4 py-3">
                Individual
              </button>
            </Link>
          </div>
          <div className="">
            <Link to="/business">
              <button className="font-bold bg-gray-200 rounded-md px-4 py-3">
                Business
              </button>
            </Link>
          </div>
        </div>

        <form
          className="m-auto block max-w-3xl p-4 items-center mb-10"
          action=""
        >
          <input
            className=" block w-full mb-10 bg-white px-3 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />

          <input
            className="block w-full mb-10 bg-white px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            className="block w-full mb-10 bg-white px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />

          <input
            className="block w-full mb-10 bg-white px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            type="number"
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />

          <input
            className="block w-full mb-10 bg-white px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            type="text"
            id="code"
            name="code"
            placeholder="Referral Code (optional)"
          />
        </form>
        <p className="text-black text-md mb-8 text-center">
          By clicking the Sign Up button below, you agree to <br />
          TradExpress <span className="text-purple-600">terms and service</span>
        </p>
        <Link to="/signup">
          <button className="px-6 py-3 bg-purple-700 text-white w-full rounded-md self-center mb-12">
            Sign Up
          </button>
        </Link>
        <p className="text-black text-md text-center">
          Already have an account ?{" "}
          <span className="text-purple-700">Click here</span>
        </p>
      </div>
    </>
  );
};

export default Individual;
