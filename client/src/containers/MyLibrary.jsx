import React, { Component } from "react";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import API from "../utils/API";
// import { Redirect } from "react-router-dom";
import WatchingMovieImage from "../img/watching-movie.jpg";
import VideosTable from "../components/Shared/Table/VideosTable";


class MyLibrary extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      results: [],
      genreFilters: [],
      castFilters: [],
      // castMap: new Set(),
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleGenreClick = this.handleGenreClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCastClick = this.handleCastClick.bind(this);
  }
  async componentDidMount() {
    let token = localStorage.getItem("jwt");
    let results = await API.getVideos(token);
    // let allCast
    
    this.setState({ results: results.data, token: token,  });
  }

  handleCastClick(cast_id) {
    if (this.state.castFilters.includes(cast_id)) {
      this.setState({
        castFilters: this.state.castFilters.filter(c => c !== cast_id)
      });
    } else {
      this.setState({
        castFilters: [...this.state.castFilters, cast_id]
      });
    }
  }

  handleGenreClick(genre_id) {
    if (this.state.genreFilters.includes(genre_id)) {
      this.setState({
        genreFilters: this.state.genreFilters.filter(g => g !== genre_id)
      });
    } else {
      this.setState({
        genreFilters: [...this.state.genreFilters, genre_id]
      });
    }
  }

  async handleDelete(index) {
    try {
        let idToDelete = this.state.results[index].id;
        let result = await API.deleteVideo(idToDelete, this.state.token);
        if (result.data.success) {
          this.setState({ results: this.state.results.filter(r => r.id !== idToDelete) });
        }
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
        <VideosTable castFilters={this.state.castFilters} handleCastClick={this.handleCastClick} videosToDisplay={this.state.results} handleDelete={this.handleDelete} genreFilters={this.state.genreFilters} handleGenreClick={this.handleGenreClick}/>

        {/* LIBRARY OF VIDEOS GOES HERE */}

        <GreyBlock />
      </>
    );
  }
}

export default MyLibrary;
