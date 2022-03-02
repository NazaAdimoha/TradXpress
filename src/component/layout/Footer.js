import React from "react";
import rights from "../../Images/Group 78.svg";
const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <div>
          <h3>Product</h3>
          <div>
            <div>
              <p>Bitcoin</p>
            </div>
            <div>
              <p>Altcoin</p>
            </div>
            <div>
              <p>Fiat</p>
            </div>
            <div>
              <p>Refill</p>
            </div>
            <div>
              <p>P2P</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Learn</h3>
          <div>
            <div>
              <p>Blog</p>
            </div>
            <div>
              <p>Help Center</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div>
            <p>hello@tradeexpress.com</p>
            <p>support@tradeexpress.com</p>
            <div></div>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <div>
            <p>About Us</p>
            <p>Careers</p>
            <p>Rates</p>
            <p>Mobile</p>
          </div>
        </div>
        <div>
          <h3>Legal</h3>
          <div>
            <p>Privacy Policy</p>
            <p>Anti-Money Laundering </p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <img src={rights} alt="" />
      </div>
    </>
  );
};

export default Footer;
