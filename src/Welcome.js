import React from "react";
import check from "./Images/Icon awesome-check-circle.svg";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <>
      <section className="block max-w-2xl p-4 mx-auto bg-pink-50 rounded-md shadow-md dark:bg-gray-800">
        <form>
          <div className="block gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700 dark:text-gray-200" for="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
        </form>

        <div className="flex justify-between mt-4 mb-16">
          <div className="flex flex-row">
            <img src={check} alt="" />
            <p className="ml-4">Remember password</p>
          </div>
          <div>
            <p className="text-purple-600 ">Forgot Password?</p>
          </div>
        </div>

        <div>
          <button className="mb-10 w-full bg-purple-700 hover:purple-800 text-white px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform">
            Log In
          </button>
        </div>

        <div className="mt-6 m-auto text-center">
          <p className="text-black font-bold">
            {" "}
            New User ?
            <Link to="/getstarted">
              <span className="text-purple-600 font-bold">Click here</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Welcome;
