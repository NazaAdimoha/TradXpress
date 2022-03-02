import React from "react";
import Navbar from "../component/layout/Navbar";
import mail from "../Images/mailing.svg";
const Signup = () => {
  return (
    <>
      <Navbar />
      <section className="block max-w-2xl h-5/6 p-6 mx-auto bg-pink-50 rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg mt-4 mb-10 text-center text-neutral-700 font-bold">
          You're Almost In!
        </h2>
        <h1 className="text-3xl font-bold text-black text-center mb-10">
          Welcome KingNaz😎
        </h1>
        <img className="text-center mb-12 m-auto" src={mail} alt="" />
        <p className="text-center mb-8">
          An activation link has been sent to{" "}
          <span className="text-purple-700">adimohanaza@gmail.com</span> <br />{" "}
          Please click on the link to verify your email and <br /> activate your
          TradExpress account.
        </p>
        <button className="bg-purple-700 hover:purple-800 text-white px-4 py-3 w-full mb-6">
          Continue
        </button>
        <p className="text-center">
          Didn't get an email? Kindly click{" "}
          <span className="">resend email</span> Wrong email supplied? Edit
          email address
        </p>

        <div className="mt-2 m-auto text-center">
          <p className="text-black font-bold">
            {" "}
            New User ?
            <span className="text-purple-600 font-bold">Click here</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Signup;
