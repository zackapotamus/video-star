import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import NavBarLogin from "../components/Shared/NavBar/NavBarLogin";
import LoginForm from "../components/Shared/Form/LoginForm";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import FilmMakerImage from "../img/filmmaker.jpg";
// import jwt from "jsonwebtoken";
import API from "../utils/API";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this); // why?
  }

  async componentDidMount() {
    if (this.props.isAuthenticated()) {
      await this.props.history.push("/library");
    } else {
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      let response = await API.logIn({
        email: this.state.email,
        password: this.state.password,
      });
      // console.log("login submit response:", response);
      if (response.data.success) {
        localStorage.setItem("jwt", response.data.data);
      } else {
        // error
        return false;
      }
      // this.props.checkForToken();
      await this.props.history.push("/library");
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <NavBarLogin />

        {/* <Hero imageUrl={FilmMakerImage} /> */}

        {/* <GreyBlockTop page="Login" /> */}

        <div className="container" style={{ marginTop: 75 }}>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-center">
                    Log In{" "}
                    <span className="h6">
                      or{" "}
                      <Link
                        to="/signup"
                        style={{ textDecoration: "underline" }}
                      >
                        Sign Up
                      </Link>
                    </span>
                  </h4>
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

        {/* <div style={{ height: "180px"}}/> */}
      </>
    );
  }
}

export default Login;
