import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../styles/styles.css";

function Landing({ history, ...props }) {
   // React States
   const [errorMessages, setErrorMessages] = useState({});
   const [isSubmitted, setIsSubmitted] = useState(false);
 
   // User Login info
   const database = [
     {
       username: "user1",
       password: "pass1"
     },
     {
       username: "user2",
       password: "pass2"
     }
   ];
 
   const errors = {
     uname: "invalid username",
     pass: "invalid password"
   };
 
   const handleSubmit = (event) => {
     //Prevent page reload
     event.preventDefault();
 
     var { uname, pass } = document.forms[0];
 
     // Find user login info
     const userData = database.find((user) => user.username === uname.value);
 
     // Compare user info
     if (userData) {
       if (userData.password !== pass.value) {
         // Invalid password
         setErrorMessages({ name: "pass", message: errors.pass });
       } else {
         setIsSubmitted(true);
         history.push('/home');
       }
     } else {
       // Username not found
       setErrorMessages({ name: "uname", message: errors.uname });
     }
   };
 
   // Generate JSX code for error message
   const renderErrorMessage = (name) =>
     name === errorMessages.name && (
       <div className="error">{errorMessages.message}</div>
     );
 
   // JSX code for login form
   const renderForm = (
    
     <div className="form">
       <form onSubmit={handleSubmit}>
         <div className="input-container">
           <label>Username </label>
           <input type="text" name="uname" required />
           {renderErrorMessage("uname")}
         </div>
         <div className="input-container">
           <label>Password </label>
           <input type="password" name="pass" required />
           {renderErrorMessage("pass")}
         </div>
         <div className="button-container">
           <input type="submit" />
         </div>
       </form>
     </div>
   );

   return (
    
     <div className="login-section">
       <img src="https://img.okezone.com/content/2016/09/28/326/1501239/sarang-pokemon-langka-sengaja-dibuat-makin-random-ftcKisNkIK.png"
      />
       <div className="login-form">
       <div className="d-flex justify-content-center align-items-center">
  
   
         <div className="title">Sign In</div>
         </div>
         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
       </div>
       
     </div>
     
     
   );
 }

export default Landing;