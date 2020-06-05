import React, { Component } from "react";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import ProfileCard from "../components/Shared/Card/ProfileCard";
import MovieAction from "../img/movie-action.jpg";
import API from "../utils/API";
// import jwt from "jsonwebtoken";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      bio: "",
      savedState: false,
      editing: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick() {
    this.setState({ editing: !this.state.editing, savedState: false });
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    await API.updateUser({
      name: this.state.name,
      email: this.state.email,
      bio: this.state.bio,
    });
    this.setState({
      savedState: true,
    });
  }

  async handleChange(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async componentDidMount() {
    let result = await API.getUser();
    this.setState({
      name: result.data.name,
      email: result.data.email,
      bio: result.data.bio,
    });
  }

  render() {
    return (
      <>
        <NavBar2 />
        <Hero imageUrl={MovieAction} />
        <GreyBlockTop page="Account" />

        <ProfileCard
          editing={this.state.editing}
          handleEditClick={this.handleEditClick}
          handleChange={this.handleChange}
          handleFormSubmit={this.handleFormSubmit}
          emailValue={this.state.email}
          nameValue={this.state.name}
          bioValue={this.state.bio}
          savedState={this.state.savedState}
        />

        <GreyBlock />
      </>
    );
  }
}

export default Account;
