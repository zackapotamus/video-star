import React, { Component } from "react";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import ProfileCard from "../components/Shared/Card/ProfileCard";
import MovieAction from "../img/movie-action.jpg";

class Account extends Component {
  render() {
    return (
      <>
        <NavBar2 />
        <Hero imageUrl={MovieAction} />
        <GreyBlockTop page="Account" />

        <ProfileCard />

        <GreyBlock />
      </>
    );
  }
}

export default Account;