import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";


const Header = () => {
  return (
    <header className="container-header mb-5">
      <Container fluid>
     
            <p className="text-light" style={{ textAlign: "center" }}>
            <div align="center">
      <img src="https://freepngimg.com/thumb/pokemon/2-2-pokemon-png-pic.png" height="100" width="300"
            />
      </div>
              </p>
                   
      <div className="d-flex justify-content-center align-items-center" >
        {/* <h1>M FAJRIN </h1> */}
          
        </div>
      </Container>
    </header>
  );
};

export default Header;
