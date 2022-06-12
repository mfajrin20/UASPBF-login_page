import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { SignUpLink } from '../SignUp';
import * as ROUTES from '../../constants/routes';

class SignIn extends Component {
 onSubmit = event => {
      {/*}  const { email, password } = this.state;
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.DASHBOARD);
          })
          .catch(error => {
            this.setState({ error });
          }); */}
        this.props.history.push(ROUTES.DASHBOARD);  
        event.preventDefault();
      };  
  render(){
    return (
        <div>
        {/* Begin page */}
        <div className="accountbg" style={{background: 'url("https://techno.okezone.com/read/2016/09/28/326/1501239/sarang-pokemon-langka-sengaja-dibuat-makin-random")', backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <div className="wrapper-page account-page-full">
          <div className="card">
            <div className="card-block">
              <div className="account-box">
                <div className="card-box p-5">
                  <h2 className="text-uppercase text-center pb-4">
                    <a href="/" className="text-success">
                      <span><img src="assets/images/logo.png" alt="" height={26} /></span>
                    </a>
                  </h2>
                  <form className action="#" onSubmit={this.onSubmit}>
                    <div className="form-group m-b-20 row">
                      <div className="col-12">
                        <label htmlFor="emailaddress">Email address</label>
                        <input className="form-control" type="email" id="emailaddress" required placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="form-group row m-b-20">
                      <div className="col-12">
                        <a href="page-recoverpw.html" className="text-muted float-right"><small>Forgot your password?</small></a>
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" required id="password" placeholder="Enter your password" />
                      </div>
                    </div>
                    <div className="form-group row m-b-20">
                      <div className="col-12">
                        <div className="checkbox checkbox-custom">
                          <input id="remember" type="checkbox" defaultChecked />
                          <label htmlFor="remember">
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row text-center m-t-10">
                      <div className="col-12">
                        <button className="btn btn-block btn-custom waves-effect waves-light"  type="submit">Sign In</button>
                      </div>
                    </div>
                  </form>
                    <SignInLink />
                </div>
              </div>
            </div>
          </div>
          <div className="m-t-40 text-center">
            <p className="account-copyright">2018 © Highdmin. - Coderthemes.com</p>
          </div>
        </div>
      </div>
    )
  }
}
const SignInLink = () =>(
    <div className="row m-t-50">
    <div className="col-sm-12 text-center">
      <p className="text-muted">Don't have an account? <Link to={ROUTES.SIGN_UP} className="text-dark m-l-5"><b>Sign Up</b></Link></p>
    </div>
  </div>
);

export default SignIn;
export { SignInLink };