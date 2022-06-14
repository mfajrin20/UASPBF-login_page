import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";

const dashboard = () => {
    
return(
        <>
        
<div class="margin-bottom">
        <div className="d-flex justify-content-center align-items-center">
        
        <button>
        <div className="d-flex justify-content-center align-items-center">
      <img src="https://cdn.onlinewebfonts.com/svg/download_472997.png" height="50" width="50"
      />
        </div>
        
        <a href = "/landing"> Login </a>
       
        </button>
        <br/>
        <button>
        <div className="d-flex justify-content-center align-items-center">
      <img src="https://w7.pngwing.com/pngs/208/228/png-transparent-pokeball-pokebola-pokemon-pokemongo-pokemon-go-icon.png" height="50" width="50"
      />
        </div>
        <a href = "/about"> About </a>
        </button>
        <button>
        <div className="d-flex justify-content-center align-items-center">
      <img src="http://cdn.onlinewebfonts.com/svg/img_162044.png" height="50" width="50"
      />
        </div>
        <a href = "/contact"> Contact Us </a>
        </button>
        <button>
        <div className="d-flex justify-content-center align-items-center">
      <img src="https://www.shareicon.net/data/2016/10/18/844144_game_512x512.png" height="50" width="50"
      />
        </div>
        <a href = "/series"> Mapps </a>
        </button>
        <button>
        <div className="d-flex justify-content-center align-items-center">
      <img src="https://www.pngall.com/wp-content/uploads/12/Gaming-PNG-Images-HD.png" height="50" width="50"
      />
        </div>
        <a href = "/permainanVideo"> Games Video </a>
        </button>
        <button>
        <div className="d-flex justify-content-center align-items-center">
      <img src="https://www.freeiconspng.com/uploads/news-icon-3.png" height="50" width="50"
      />
        </div>
        <a href = "/news"> News </a>
        </button>
              <button>
        <div className="d-flex justify-content-center align-items-center">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" height="50" width="50"
      />
        </div>
        <a href = "https://github.com/mfajrin20/UASPBF-login_page"> Github </a>
        </button>
        <br/>
          <br/>
        </div>
        </div>
        <div class="margin">
        <div className="d-flex justify-content-center align-items-center">
       <h1> SELAMAT DATANG DI POKEMON GO </h1>
       </div>
        </div>  
        <div class="margin">
        <div className="d-flex justify-content-center align-items-center">
       
        <h1> MAINKAN POKEMON MU </h1>
        </div>
        </div>
        <div class="margin">
   <div className="d-flex justify-content-center align-items-center">
      <img src="https://img.okezone.com/content/2016/09/28/326/1501239/sarang-pokemon-langka-sengaja-dibuat-makin-random-ftcKisNkIK.png"
      />
        </div>
        </div>
        <Container fluid>
      <div className="d-flex justify-content-center align-items-center">
     
    
      <div className="d-flex justify-content-center align-items-center">
        <p className="text-center">Pokémon Go adalah sebuah permainan realitas tertambah dalam telepon pintar yang dikembangkan oleh Niantic, 
        sebuah perusahaan sempalan milik Google, yang tersedia untuk perangkat iOS dan Android. 
        Permainan ini diluncurkan secara beta pada bulan Juli 2016.</p>
       
      </div>
        </div>
      </Container>
      </>
      
      
)



};
export default dashboard;