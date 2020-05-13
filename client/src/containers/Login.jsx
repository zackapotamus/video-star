import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import axios from "axios";
// import NavBarLogin from "../components/Shared/NavBar/NavBarLogin";
import LoginForm from "../components/Shared/Form/LoginForm";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import FilmMakerImage from "../img/filmmaker.jpg";
import jwt from "jsonwebtoken";

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
    console.log("login component did mount");
    if (this.props.isAuthenticated()) {
      await this.props.history.push("/mylibrary");
    } else {
      console.log("not logged in");
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
      let response = await axios.post("/api/auth", {
        email: this.state.email,
        password: this.state.password,
      });
      console.log("login submit response:", response);
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

  render() {
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

export default Login;
