import React, { Component } from "react";
import NavBarLogin from "../components/Shared/NavBar/NavBarLogin";
import SignupForm from "../components/Shared/Form/SignupForm";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import FilmMakerImage from "../img/filmmaker.jpg";
import axios from "axios";
import jwt from "jsonwebtoken";
import { Redirect } from 'react-router-dom'

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      confirm: "",
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
      let response = await axios.post("/api/auth/signup", {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      });
      console.log("signup submit response:", response);
      if (response.data.success) {
        const decoded = jwt.verify(
          response.data.data,
          process.env.REACT_APP_SESSION_SECRET
        );
      }
      localStorage.setItem("jwt", response.data.data);
      this.props.checkForToken();
      await this.props.history.push("/mylibrary");
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    if (this.props.checkForToken()) {
      await this.props.history.push("/mylibrary");
    }
  }

  render() {
    console.log("render signup");
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
      <>
        <NavBarLogin />
        <Hero imageUrl={FilmMakerImage} />
        <GreyBlockTop page="Signup" />

        <div className="container" style={{ marginBottom: 80 }}>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Sign Up. It's Free.</h2>
                </div>

                <div>
                  <SignupForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    emailValue={this.state.email}
                    passwordValue={this.state.password}
                    nameValue={this.state.name}
                    confirmValue={this.state.confirm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <GreyBlock />
      </>
    );}
  }
}

export default Signup;
