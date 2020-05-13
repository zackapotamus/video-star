import React, { Component } from 'react';
import NavBarLogin from '../components/Shared/NavBar/NavBarLogin';
import SignupForm from '../components/Shared/Form/SignupForm';
import Hero from '../components/Shared/Hero/Hero';
import GreyBlockTop from '../components/Shared/GreyBlockTop/GreyBlockTop';
import GreyBlock from '../components/Shared/GreyBlock/GreyBlock';
import FilmMakerImage from '../img/filmmaker.jpg';

class Signup extends Component {
  async componentDidMount() {
    if (this.props.checkForToken()) {
      await this.props.history.push("/mylibrary");
    }
  }

  render() {
    return (
      <>
        <NavBarLogin />
        <Hero imageUrl={FilmMakerImage} />
        <GreyBlockTop page='Signup' />

        <div className="container" style={{ marginBottom: 80 }}>
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
        
        <GreyBlock />
      </>
    );
  }
}

export default Signup;