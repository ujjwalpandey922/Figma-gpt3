import React from "react";
import "./Feature_Style.css";
import possilityIMG from "../assets/possibility.png";
const Features = () => {
  return (
    <div className="gpt3__features section__margin" id="possibilities">
      <div className="gpt3__features-image">
        <img src={possilityIMG} alt="possibility" />
      </div>
      <div className="gpt3__features-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <span>Request Early Access to Get Started</span>
      </div>
    </div>
  );
};

export default Features;
