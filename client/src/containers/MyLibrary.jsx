import React, { Component } from "react";
// import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import API from "../utils/API";
// import { Redirect } from "react-router-dom";
import WatchingMovieImage from "../img/watching-movie.jpg";
import VideosTable from "../components/Shared/Table/VideosTable";
import NavBarNew from "../components/Shared/NavBar/NavBarNew";

class MyLibrary extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      genreFilters: [],
      castFilters: [],
      castMap: new Map(),
      castCountMap: new Map(),
      crewMap: new Map(),
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleGenreClick = this.handleGenreClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCastClick = this.handleCastClick.bind(this);
  }
  async componentDidMount() {
    let results = await API.getVideos();
    let castCountMap = new Map();
    this.setState({
      results: results.data,
      castMap: new Map(
        results.data.reduce((acc, curr) => {
          let mapped = curr.cast.map((current, index, array) => {
            castCountMap.set(
              current.person_id,
              (castCountMap.get(current.person_id) ?? -1) + 1
            );
            return [current.person_id, current.name];
          });
          return [...acc, ...mapped];
        }, [])
      ),
      castCountMap: castCountMap,
    });
    // for (let k of castCountMap.keys()) {
    //   if (!castCountMap.get(k)) {
    //     castCountMap.delete(k);
    //   }
    // }
    // console.log(this.state.results);
  }

  handleCastClick(cast_id) {
    if (this.state.castFilters.includes(cast_id)) {
      this.setState({
        castFilters: this.state.castFilters.filter((c) => c !== cast_id),
      });
    } else {
      this.setState({
        castFilters: [...this.state.castFilters, cast_id],
      });
    }
  }

  handleGenreClick(genre_id) {
    if (this.state.genreFilters.includes(genre_id)) {
      this.setState({
        genreFilters: this.state.genreFilters.filter((g) => g !== genre_id),
      });
    } else {
      this.setState({
        genreFilters: [...this.state.genreFilters, genre_id],
      });
    }
  }

  async handleDelete(index) {
    try {
      let idToDelete = this.state.results[index].id;
      let result = await API.deleteVideo(idToDelete /*, this.state.token*/);
      if (result.data.success) {
        this.setState({
          results: this.state.results.filter((r) => r.id !== idToDelete),
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        {/* <NavBar2 /> */}
        <NavBarNew />
        {/* <Hero imageUrl={WatchingMovieImage} /> */}
        {/* <GreyBlockTop page="My Library" /> */}

        {/* TABLE OF LIBRARY OF VIDEOS GOES HERE */}
        <VideosTable
          castFilters={this.state.castFilters}
          handleCastClick={this.handleCastClick}
          videosToDisplay={this.state.results}
          handleDelete={this.handleDelete}
          genreFilters={this.state.genreFilters}
          handleGenreClick={this.handleGenreClick}
          castCountMap={this.state.castCountMap}
        />

        {/* LIBRARY OF VIDEOS GOES HERE */}

        <GreyBlock />
      </>
    );
  }
}

export default MyLibrary;
