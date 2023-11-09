import React from "react";
import  {Link} from "react-router-dom"
import "./Home.css";

const Homepage = () => {
  return (
    <div className="section">
      <div className="overlap-group">
        <div className="heading-tuinue">TUINUE WASICHANA</div>
        <p className="heading-together">Together we can make a difference</p>
      </div>
      <div className="link">
        <Link to="/charities">
        <div className="text-wrapper">Donate Now</div>
        </Link>
      </div>
      <div className="div-probootstrap">
        <div className="div-item">
          <div className="symbol"></div>
          <div className="heading-give">GIVE DONATION</div>
          <p className="div">Lorem ipsum dolor sit amet</p>
          <div className="text-wrapper-2">consectetur adipisicing elit</div>
          <div className="link-sign-in">Sign In</div>
        </div>
        <div className="div-item-2">
          <div className="symbol"></div>
          <div className="heading-become">BECOME VOLUNTEER</div>
          <p className="div">Lorem ipsum dolor sit amet</p>
          <div className="text-wrapper-2">consectetur adipisicing elit</div>
          <div className="link-lear-more">Lear More</div>
        </div>
        <div className="div-item-3">
          <div className="symbol"></div>
          <div className="heading-start-a">START A CHARITY</div>
          <p className="div">Lorem ipsum dolor sit amet</p>
          <div className="text-wrapper-2">consectetur adipisicing elit</div>
          <Link to="/signup" >
          <div className="link-sign-in">Sign In</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage ;
