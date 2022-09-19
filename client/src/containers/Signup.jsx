import React, { Component } from "react";
import { Link } from 'react-router-dom';
import NavBarLogin from "../components/Shared/NavBar/NavBarLogin";
import SignupForm from "../components/Shared/Form/SignupForm";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import FilmMakerImage from "../img/filmmaker.jpg";
import axios from "axios";
import jwt from "jsonwebtoken";
import API from "../utils/API";
// import { Redirect } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      confirm: "",
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this); // why?
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
        name: this.state.name,
      });
      // console.log("signup submit response:", response);
      if (response.data.success) {
        jwt.verify(
          response.data.data,
          process.env.REACT_APP_SESSION_SECRET
        );
      } else {
        // TODO: display error message
      }
      localStorage.setItem("jwt", response.data.data);
      this.props.checkForToken();
      await this.props.history.push("/library");
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    if (this.props.isAuthenticated()) {
      await this.props.history.push("/library");
    }
  }

  render() {
    // console.log("render signup");
    return (
      <>
        <NavBarLogin />
        {/* <Hero imageUrl={FilmMakerImage} /> */}
        {/* <GreyBlockTop page="Signup" /> */}

        {/* <div className="container" style={{ marginBottom: "80px", marginTop: "75px" }}> */}
        <div className="container" style={{ marginTop: "75px" }}>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-center">Sign Up <span className="h6">or <Link to='/login' style={{textDecoration: "underline"}}>Log In</Link></span></h4>
                </div>

                <div>
                  <SignupForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    emailValue={this.state.email}
                    passwordValue={this.state.password}
                    nameValue={this.state.name}
                    confirmValue={this.state.confirm}
                    error={this.state.error}
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

export default Signup;
