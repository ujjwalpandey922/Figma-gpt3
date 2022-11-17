import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.svg";
import "./Style_Navbar.css";
const Menu = () => (
  <>
    <span>
      <a href="#home">HOME</a>
    </span>
    <span>
      <a href="#gpt3">What is GPT</a>
    </span>
    <span>
      <a href="#possibilities">Open AI</a>
    </span>
    <span>
      <a href="#features">Case Studies</a>
    </span>
    <span>
      <a href="#blog">Library</a>
    </span>
  </>
);
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <span>Sign In </span>
        <button>Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {!toggle ? (
          <RiMenu3Line
            color="white"
            size={27}
            onClick={() => setToggle(true)}
            cursor="pointer"
          />
        ) : (
          <RiCloseLine
            color="white"
            size={27}
            onClick={() => setToggle(false)}
            cursor="pointer"
          />
        )}
        {toggle && (
          <div className="gpt3__navbar-menu_container scale-up">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <span>Sign In </span>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
