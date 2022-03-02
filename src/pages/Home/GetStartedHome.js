import { Link } from "react-router-dom";
import google from "../../Images/Group 53.svg";
import appleicon from "../../Images/Icon awesome-apple.svg";

const GetStartedHome = () => {
  return (
    <>
      <p className="mb-10">
        Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?
      </p>
      <h3 className="text-4xl font-bold text-black mb-12">
        Create your account for free and start trading today!
      </h3>
      <Link to="/getstarted">
        <button className="bg-purple-700 mb-14 text-neutral-200 px-12 py-3 font-medium capitalize transition-colors duration-200 transform  rounded-sm hover:bg-purple-600">
          Get started
        </button>
      </Link>

      <div className="flex justify-center mb-14">
        <button className="px-8 py-3 border-black bg-slate-50 rounded-sm">
          <div className="flex ml-2">
            <img src={appleicon} alt="apple-icon" />
            <div className="ml-4 text-center">
              <p>Download on the</p>
              <p>App Store</p>
            </div>
          </div>
        </button>

        <button className="px-8 py-3 border-black bg-slate-50 ml-6 rounded-sm">
          <div className="flex ml-2 ">
            <div className="flex">
              <img src={google} alt="google-icon" />
              <div className="ml-4 text-center">
                <p>Download on the</p>
                <p>App Store</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default GetStartedHome;
