import React from "react";
import "./Footer_Style.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-header">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <span>Request Early Access</span>
      </div>
      <div className="gpt3__fotter-container">
        <div className="gpt3__fotter-container-head">
          <h4>GPT3 </h4>
          <p>Crechterwoord K12 182 DK Yaraland,@ All Rights Reserved</p>
        </div>
        <div className="gpt3__fotter-container-list">
          <div className="gpt3__fotter-container-list-link">
            <ul>
              <h5>Links</h5>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="gpt3__fotter-container-list-link">
            <ul>
              <h5>Company</h5>
              <li>Terms & Conditions</li>
              <li>Privacy Policy </li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="gpt3__fotter-container-list-link">
            <ul>
              <h5>Get in touch</h5>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>Counters</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
      <span>© 2021 GPT-3. All rights reserved.</span>
    </div>
  );
};

export default Footer;
