import React, { Component } from 'react';
// import NavBarLogin from '../components/Shared/NavBar/NavBarLogin';

import NavBarLogin from '../components/Shared/NavBar/NavBarLogin';
import LoginForm from '../components/Shared/Form/LoginForm';
import Hero from '../components/Shared/Hero/Hero';
import GreyBlockTop from '../components/Shared/GreyBlockTop/GreyBlockTop';

class Login extends Component {
  render() {
    return (
      <>
        <NavBarLogin />

        <Hero imageUrl='./assets/img/filmmaker.jpg' page='Login'/>

        <GreyBlockTop />

        <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Log In to Your Account</h2>
                </div>

                <div>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;