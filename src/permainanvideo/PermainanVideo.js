import React from "react";
import { Container } from "react-bootstrap";


const video = () => {
    
return(
        <>
        <div className="d-flex justify-content-center align-items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" height="300" width="850"
      />

     
        </div>
        
        
      
        <Container fluid>
      <div className="d-flex justify-content-center align-items-center">
      <div class="col-md-8 text-center">
                <h2 class="title">NONTON FULL POKEMON</h2>
                
            </div>
     
        </div>
        <div className="d-flex justify-content-center align-items-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/upiuMRWfll8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WIweQgAaIfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <br/>
          <br/>
       
           
          
      </Container>
      <a href = "/dashboard">
            <p className="text-light" style={{ textAlign: "center" }}>
            <div className="d-flex justify-content-center align-items-center">
      <img src="https://icon-library.com/images/undo-512_4779.png" height="80" width="80"
            />
      </div>
              </p>
                     </a>
      </>
      
      
)



};
export default video;