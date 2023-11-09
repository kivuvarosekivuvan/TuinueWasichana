import React from "react";
import  {Link} from "react-router-dom"
import "./AboutUs.css";

const About_Us = () => {
  return (
    <div className="section">
      <div className="overlap-group">
        <div className="heading-tuinue">TUINUE WASICHANA</div>
        <p className="heading-together">Together we can make a difference</p>
        </div>
        <div className="ourstory">
          <h2>Our Story</h2>
          <p>In most sub-saharan countries, school going girls are unable to access pads and other supplies needed for their periods. The year 2016 studies from ministry of education revealed girls from poor families miss 20 % of school days in a year due to lack of sanitary towels the data indicated that a girl in primary school between class 6 and 8 can lose up to 18 weeks out of 108 weeks while those in high school can lose almost 24 weeks out of 144 weeks of learning. An organisation dedicated to dealing with this problem is working on not just providing sanitary towels but also providing clean water and sanitation facilities such as toilets to ensure they are able to meet the guidelines for proper menstrual hygiene as defined by UNICEF.</p>
        </div>
      </div>
  );
};

export default About_Us ;
