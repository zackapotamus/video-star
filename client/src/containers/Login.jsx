import React, { Component } from 'react';
import NavBarLogin from '../components/Shared/NavBar/NavBarLogin';
// import NavBar2 from '../components/Shared/NavBar/NavBar2';
import LoginForm from '../components/Shared/Form/LoginForm';
import Hero from '../components/Shared/Hero/Hero';
import GreyBlockTop from '../components/Shared/GreyBlockTop/GreyBlockTop';
import GreyBlock from '../components/Shared/GreyBlock/GreyBlock';
import FilmMakerImage from '../img/filmmaker.jpg';

class Login extends Component {
  render() {
    return (
      <>
        <NavBarLogin />

        <Hero imageUrl={FilmMakerImage} />

        <GreyBlockTop page='Login'/>

        <div className="container" style={{marginBottom: 100}}>
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

        <GreyBlock />
        
      </>
    );
  }
}

export default Login;