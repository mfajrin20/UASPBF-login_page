import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const contact = () => {
  
return(
        <>

<div className="d-flex justify-content-center align-items-center">
      
       <h1> KAMI BANTU KELUHAN ANDA TENTANG APPLIKASI KAMI </h1>
       
     
     
        </div> 
        <p class="text-center"> 1941720010 M Fajrin </p> 
        <div className="d-flex justify-content-center align-items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" height="300" width="850"
      />

        </div>
       
        <div className="d-flex justify-content-center align-items-center">
        
        <h1> KONTAK </h1>

        
        </div>
        
        <Container fluid>
      <div className="d-flex justify-content-center align-items-center">
      <div class="col-md-8 text-center">
                
                <h6 class="subtitle">Untuk informasi lebih lanjut terkait dapat menghubungi kontak berikut untuk mendapatkan perhatian tentang aplikasi ini</h6>
            </div>
     
        </div>
        <br/>
          <br/>
        <div className="d-flex justify-content-center align-items-center">
        <div class="col-lg-4">
                <div class="detail-box p-40 bg-info aos-init aos-animate" data-aos="fade-right" data-aos-duration="1200">
                   
                    <h2 class="text-center">Informasi Kontak terkait Pokemon</h2>
                    <p class="text-black m-t-30 op-8">Telp.
                       (0373) 623552 </p>
                    <p class="text-black op-8">Jalan. Beringin No. 1 Dompu - 84211
                         Kec. Dompu, Kab. Dompu</p>
                         
                         
                        {/* <div class="subscribe-box">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.9614655434643!2d118.46330954855651!3d-8.535307543702677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dca6fc838ee28ab%3A0x3aa5cd05e8337fa!2sParuga%20Parenta%20Dana%20Nggahi%20Rawi%20Pahu%20Dompu!5e1!3m2!1sid!2sid!4v1650801779548!5m2!1sid!2sid" width="100%" height="200" 
  style="border:0;" allowfullscreen="">
    </iframe>                                    
</div> */}
 <a href = "https://www.google.com/maps/dir/-8.5163417,118.474717/FF87%2B2QR+Kantor+Bupati+Dompu,+Jl.+Beringin,+Dorotangga,+Kec.+Dompu,+Kabupaten+Dompu,+Nusa+Tenggara+Bar./@-8.5265584,118.4616606,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2dca6fc86012fe53:0xade1f8bd9474f23f!2m2!1d118.4643783!2d-8.5348758">
            <p className="text-light" style={{ textAlign: "center" }}>
            <div className="d-flex justify-content-center align-items-center">
      <img src="https://cdn.icon-icons.com/icons2/488/PNG/512/location_47717.png" height="80" width="80"
            />
      </div>
              </p>
                     </a>

                </div>
                
            </div>
            
            </div>
            
            {/* <div className="d-flex justify-content-center align-items-center">
            <div class="col-lg-4 col-md-6">
                                <p class="p-t-10"> 1941720010 M Fajrin </p>
                                <div class="m-t-20 m-b-30">
                                    <a href="#" class="link"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="link"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="link"><i class="fa fa-linkedin"></i></a>
                                    <a href="#" class="link"><i class="fa fa-pinterest"></i></a>
                                    <a href="#" class="link"><i class="fa fa-instagram"></i></a>
                                </div> */}
                            {/* </div> */}
                            {/* </div> */}
                            
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
export default contact;