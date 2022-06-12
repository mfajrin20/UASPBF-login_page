import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SignInLink } from '../SignIn';
import * as ROUTES from '../../constants/routes';

class SignUp extends Component {
    render(){
        return(
            <>
           {/* Begin page */}
        <div className="accountbg" style={{background: 'url("https://techno.okezone.com/read/2016/09/28/326/1501239/sarang-pokemon-langka-sengaja-dibuat-makin-random")', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="wrapper-page account-page-full">
          <div className="card">
            <div className="card-block">
              <div className="account-box">
                <div className="card-box p-5">
                  <h2 className="text-uppercase text-center pb-4">
                    <a href="index.html" className="text-success">
                      <span><img src="assets/images/logo.png" alt="" height={26} /></span>
                    </a>
                  </h2>
                  <form className="form-horizontal" action="#">
                    <div className="form-group row m-b-20">
                      <div className="col-12">
                        <label htmlFor="username">Full Name</label>
                        <input className="form-control" type="email" id="username" required placeholder="Michael Zenaty" />
                      </div>
                    </div>
                    <div className="form-group row m-b-20">
                      <div className="col-12">
                        <label htmlFor="emailaddress">Email address</label>
                        <input className="form-control" type="email" id="emailaddress" required placeholder="john@deo.com" />
                      </div>
                    </div>
                    <div className="form-group row m-b-20">
                      <div className="col-12">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" required id="password" placeholder="Enter your password" />
                      </div>
                    </div>
                    <div className="form-group row m-b-20">
                      <div className="col-12">
                        <div className="checkbox checkbox-custom">
                          <input id="remember" type="checkbox" defaultChecked />
                          <label htmlFor="remember">
                            I accept <a href="#" className="text-custom">Terms and Conditions</a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row text-center m-t-10">
                      <div className="col-12">
                        <button className="btn btn-block btn-custom waves-effect waves-light" type="submit">Sign Up Free</button>
                      </div>
                    </div>
                  </form>
                  <SignUpLink />
                </div>
              </div>
            </div>
          </div>
          <div className="m-t-40 text-center">
            <p className="account-copyright">2018 © Highdmin. - Coderthemes.com</p>
          </div>
        </div>
         
            </>
        )
    }
}

const SignUpLink = () => (
    <div className="row m-t-50">
    <div className="col-sm-12 text-center">
      <p className="text-muted">Already have an account? <Link to="/" className="text-dark m-l-5"><b>Sign In</b></Link></p>
    </div>
  </div>
)

export default SignUp;
export { SignUpLink };