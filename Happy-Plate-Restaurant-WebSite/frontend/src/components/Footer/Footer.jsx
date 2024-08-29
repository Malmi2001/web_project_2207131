import React from "react";
import "./Footer.css";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footerDetails">
        <div className="leftSide">
{/* //add footer social media img */}
          <h3 className="footerText">Follow Us</h3>
          <div className="socialMedia">
            <img className="socialMediaImg" src={assets.insta} />
            <img className="socialMediaImg" src={assets.fb} />
            <img className="socialMediaImg" src={assets.whatsApp} />
            <img className="socialMediaImg" src={assets.linkedIn} />
          </div>
        </div>

        <div className="center">
          <h2 className="footerHeading">HAPPY PLATE</h2>
          <ul className="footerUl">
            <li className="footerListItems">Home</li>
            <li className="footerListItems">About Us</li>
            <li className="footerListItems">Delivery</li>
            <li className="footerListItems">Privacy Policy</li>
            <li className="footerListItems">Terms Of Service</li>
          </ul>
        </div>
        <div className="rightSide">
          <h3 className="footerHeading"> Contact Us</h3>
          <ul className="footerUl">
            <li className="footerListItems">+123456789</li>
            <li className="footerListItems">happyplate@gmail.com</li>
          </ul>
          <img className="footerLogo2" src={assets.logo1} />
        </div>

      </div>

  

      <hr />
      <p className="copyRight">
    {/* //add copy right symbol */}
        &copy; 2024 Happy Plate . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
