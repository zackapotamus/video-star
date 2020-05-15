import React, { Component } from "react";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import WatchingMovieImage from "../img/watching-movie.jpg";
import VideosTable from "../components/Shared/Table/VideosTable";


class MyLibrary extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      results: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this); // why?
  }
  async componentDidMount() {
    let token = localStorage.getItem("jwt");
    let results = await API.getVideos(token);
    this.setState({ results: results.data, token: token });
  }
  async handleDelete(index) {
    try {
      console.log(index, this.state.results);
        // await API.deleteVideo(this.state.results[index].id, this.state.token);
        this.setState({ results: this.state.results.filter(r => r.id !== this.state.results[index].id)});
      } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <NavBar2 />
        <Hero imageUrl={WatchingMovieImage} />
        <GreyBlockTop page="My Library" />

        {/* TABLE OF LIBRARY OF VIDEOS GOES HERE */}
        <VideosTable videosToDisplay={this.state.results} handleDelete={this.handleDelete} />

        {/* LIBRARY OF VIDEOS GOES HERE */}

        <GreyBlock />
      </>
    );
  }
}

export default MyLibrary;
