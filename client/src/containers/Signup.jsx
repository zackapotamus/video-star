import React, { Component } from 'react';
import NavBarLogin from '../components/Shared/NavBar/NavBarLogin';
import SignupForm from '../components/Shared/Form/SignupForm';
import Hero from '../components/Shared/Hero/Hero';
import GreyBlockTop from '../components/Shared/GreyBlockTop/GreyBlockTop';

class Signup extends Component {
    render() {
        return (
            <>
                <NavBarLogin />
                <Hero imageUrl='./assets/img/filmmaker.jpg' page='Signup'/>
                <GreyBlockTop />
                
                <div className="container">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Sign Up. It's Free.</h2>
                </div>

                <div>
                <SignupForm />
                </div>
              </div>
            </div>
          </div>
        </div>
            </>
        );
    }
}

export default Signup;