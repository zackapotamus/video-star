import React, { Component } from "react";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import ProfileCard from "../components/Shared/Card/ProfileCard";
import MovieAction from "../img/movie-action.jpg";
import API from "../utils/API";
import jwt from "jsonwebtoken";

class Account extends Component {
<<<<<<< HEAD
  constructor() {
    super();
    this.state = {
      token: "",
    //   user: {} ,
      name: "",
      email: "",
      bio: "",
      savedState: false
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleFormSubmit(event) {
      event.preventDefault();
    let token = this.state.token;
    await API.updateUser(token, {
        name: this.state.name,
        email: this.state.email,
        bio: this.state.bio
    });
    this.setState({
        savedState: true
    });
  }

  async handleChange(event) {
    let { name, value } = event.target;
    this.setState({
        [name]: value
    });
  }

  async componentDidMount() {
    let token = localStorage.getItem("jwt");
    let result = await API.getUser(token);
    this.setState({
        token,
        // user: result.data
        name: result.data.name,
        email: result.data.email,
        bio: result.data.bio
    });
  }

  render() {
    return (
      <>
        <NavBar2 />
        <Hero imageUrl={MovieAction} />
        <GreyBlockTop page="Account" />

        <ProfileCard handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit} emailValue={this.state.email} nameValue={this.state.name} bioValue={this.state.bio} savedState={this.state.savedState}/>

=======
  render() {
    return (
      <>
        <NavBar2 />
        <Hero imageUrl={MovieAction} />
        <GreyBlockTop page="Account" />

        <ProfileCard />

>>>>>>> 9d2bfb8faac5171cfeb431ce9eb0b802903a2b7c
        <GreyBlock />
      </>
    );
  }
}

export default Account;
