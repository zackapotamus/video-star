import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import NavBar2 from '../components/Shared/NavBar/NavBar2';
import axios from "axios";
// import NavBarLogin from "../components/Shared/NavBar/NavBarLogin";
import LoginForm from "../components/Shared/Form/LoginForm";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import FilmMakerImage from "../img/filmmaker.jpg";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email,
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/mylibrary",
          });
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <>
          <NavBar2 />

          <Hero imageUrl={FilmMakerImage} />

          <GreyBlockTop page="Login" />

          <div className="container" style={{ marginBottom: 100 }}>
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-10">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Log In to Your Account</h2>
                  </div>

                  <div>
                    <LoginForm
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      emailValue={this.state.email}
                      passwordValue={this.state.password}
                    />
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
}

export default Login;
