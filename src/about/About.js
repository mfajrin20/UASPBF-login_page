import React from "react";
import Login from "../login/Login";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";

const about = () => {
    
return(
        <>

<div className="d-flex justify-content-center align-items-center">
       <h1> ABOUT POKEMON </h1>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
     
        </div>  
      <div className="d-flex justify-content-center align-items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" height="300" width="850"
      />
<br/>
<br/>
<br/>
<br/>
<br/>

        </div>
        <br/>
        <br/>
        <br/>
        <div className="d-flex justify-content-center align-items-center">
       
        <br/>
        
        <h1> Apa itu Pokémon? </h1>
        </div>
  
       
        <div className="d-flex justify-content-center align-items-center">
        
        <br/>
          <br/>
        </div>
        
        <Container fluid>
      <div className="d-flex justify-content-center align-items-center">
    
     <br/>
     <h1>   Makhluk Misterius Dengan Poké Ball </h1>
      <div className="d-flex justify-content-center align-items-center">
        <p className="center">Pokémon adalah makhluk misterius dengan banyak rahasia. Beberapa Pokémon tinggal bersama manusia dan beberapa tinggal di alam bebas di padang rumput, gua, atau laut, tapi banyak hal tentang ekologi mereka yang masih belum diketahui. Salah satu fitur utama mereka adalah bahwa mereka dapat ditangkap menggunakan Poké Ball, yang memungkinkan mereka dibawa-bawa.</p>
       
      </div>
        </div>
       
      </Container>
      <br/>
      <br/>
      <br/>
      <Container fluid>
      <div className="d-flex justify-content-center align-items-center">
    
     <br/>
     <h1>   jenis Pokémon </h1>
      <div className="d-flex justify-content-center align-items-center">
        <p className="center">Sebenarnya, berapa banyak jenis Pokemon yang ada? Jumlah pastinya tidak diketahui. Sementara ini ada lebih dari 800 jenis Pokémon yang telah dikonfirmasi, dan Pokémon yang belum pernah terlihat pasti akan ditemukan di masa depan.
        
       

        </p>
        
      </div>
        </div>
        
      </Container>
      <br/>
      <br/>
      <br/>

      <Container fluid>
      <div className="d-flex justify-content-center align-items-center">
    
     <br/>
     <h1>   Pokémon tumbuh  </h1>
      <div className="d-flex justify-content-center align-items-center">
  
       <p className="center">Pokémon belajar berbagai gerakan yang bisa mereka gunakan dalam pertempuran. Pokémon tumbuh lebih kuat dan naik level melalui pertempuran. Beberapa Pokémon tidak hanya naik level, tapi juga berevolusi.</p>
     
           
      </div>
     
        </div>
        
      </Container>

      <br/>
      <br/>
      <br/>

      <Container fluid>
      <div className="d-flex justify-content-center align-items-center">
    
     <br/>
     <h1>   tipe Pokémon </h1>
      <div className="d-flex justify-content-center align-items-center">
        <p className="center">Pokémon dikelompokkan menjadi 18 tipe berdasarkan karakteristiknya. Sebagai contoh, Pikachu adalah tipe Pokémon Elektronik dan Magikarp adalah tipe Air. Ada beberapa Pokémon yang termasuk dalam dua tipe, seperti Jigglypuff, yang merupakan tipe Normal dan Peri. Setiap tipe memiliki afinitas khusus yang memiliki pengaruh besar dalam pertarungan. Jika Pokémon milik lawanmu memiliki jenis afinitas yang tepat, itu bisa menjadi keuntungan besar dalam pertarungan.</p>
       
      </div>
        </div>
       
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
export default about;