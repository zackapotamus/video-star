import React, { Component } from "react";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import WatchingMovieImage from "../img/watching-movie.jpg";

class MyLibrary extends Component {
  // componentDidMount() {
  //     API.getUserData().then(result => {
  //         if (!result.data.user) {
  //             this.context.router.history.push({
  //                 pathname: '/login'
  //             });
  //         }
  //     })
  // }
  render() {
    return (
      <>
        <NavBar2 />
        <Hero imageUrl={WatchingMovieImage} />
        <GreyBlockTop page="My Library" />

        {/* TABLE OF LIBRARY OF VIDEOS GOES HERE */}

        {/* LIBRARY OF VIDEOS GOES HERE */}

        <GreyBlock />
      </>
    );
  }
}

export default MyLibrary;
