import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./styles.css";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <p className="mr-1 credits-text">CARI HERO MU DAN RAIH KEMENANGAN MU</p>
        <a className="mhq" target="_blank" >
          
        </a>
      </div>
      <a
        className="view-code"
        target="_blank"
        
      >
      
        <FontAwesomeIcon className="ml-2"  />
      </a>
    </footer>
  );
};

export default Footer;
