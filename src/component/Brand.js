import React from "react";
import google from "../assets/google.png";
import atlassian from "../assets/atlassian.png";
import slack from "../assets/slack.png";
import shopify from "../assets/shopify.png";
import dropbox from "../assets/dropbox.png";
import "./Style_Brand.css";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="google" />
      </div>{" "}
      <div>
        <img src={shopify} alt="google" />
      </div>{" "}
      <div>
        <img src={slack} alt="google" />
      </div>{" "}
      <div>
        <img src={dropbox} alt="google" />
      </div>
    </div>
  );
};

export default Brand;
