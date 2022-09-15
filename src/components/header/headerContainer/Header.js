import React from "react";
import NavBar from "../navBar/NavBar";
import DarkModeBtn from "../darkModeButton/DarkModeBtn";

// css
import "./Header.css";

const Header = () => {
  return (
    <div className="header-class-outermost">
      <div className="navBar-container">
        <NavBar />
      </div>
      <div className="darkMode-btn-container">
        <DarkModeBtn />
      </div>
    </div>
  );
};

export default Header;

/**  Note: ---------------------------------------------
 * Header goes to the header section of App.js from here
 */
