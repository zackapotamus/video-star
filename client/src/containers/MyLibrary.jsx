import React, { Component } from "react";
// import NavBar2 from "../components/Shared/NavBar/NavBar2";
// import Hero from "../components/Shared/Hero/Hero";
// import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import API from "../utils/API";
// import { Redirect } from "react-router-dom";
// import WatchingMovieImage from "../img/watching-movie.jpg";
import VideosTable from "../components/Shared/Table/VideosTable";
import NavBarNew from "../components/Shared/NavBar/NavBarNew";
// import CastSelect from "../components/Shared/Select/CastSelect";

class MyLibrary extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      genreFilters: [],
      castFilters: [],
      castCountMap: new Map(),
      filteredVideos: [],
      filteredCast: [],
      filteredGenres: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleGenreClick = this.handleGenreClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCastClick = this.handleCastClick.bind(this);
    this.handleCastClear = this.handleCastClear.bind(this);
    this.handleGenreClear = this.handleGenreClear.bind(this);
    this.getAllVideosFilteredByCast = this.getAllVideosFilteredByCast.bind(this);
    this.getAllVideosFilteredByGenre = this.getAllVideosFilteredByGenre.bind(this); // why again?
  }

  async componentDidMount() {
    let results = await API.getVideos();
    // prune
    const castCountMap = new Map();
    results.data.forEach((video) => {
      video.cast.forEach((cast) => {
        castCountMap.set(
          cast.person_id,
          (castCountMap.get(cast.person_id) ?? -1) + 1
        );
      });
    });
    results.data = results.data.map((video) => {
      return {
        ...video,
        cast: video.cast.filter(
          (cast) => cast.order <= 8 || castCountMap.get(cast.person_id)
        ),
      };
    });
    this.setState({
      results: results.data,
      castCountMap: castCountMap,
      filteredVideos: results.data,
    });
  }

  handleCastClear() {
    this.setState({
      castFilters: [],
      filteredVideos:
        this.state.genreFilters.length === 0
          ? this.state.results
          : this.getAllVideosFilteredByGenre(this.state.genreFilters),
    });
  }

  getAllVideosFilteredByCast(castIdsArray) {
    if (castIdsArray.length === 0) {
      return this.state.results;
    } else {
      return this.state.results.filter((video) => {
        let videoCastIdsArray = video.cast.map((c) => c.person_id);
        for (let i = 0; i < castIdsArray.length; i++) {
          if (!videoCastIdsArray.includes(castIdsArray[i])) {
            return false;
          }
        }
        return true;
      });
    }
  }

  getAllVideosFilteredByGenre(genreIdsArray) {
    if (genreIdsArray.length === 0) {
      return this.state.results;
    } else {
      return this.state.results.filter((video) => {
        let videoGenreIdsArray = video.genres.map((g) => g.id);
        for (let i = 0; i < genreIdsArray.length; i++) {
          if (!videoGenreIdsArray.includes(genreIdsArray[i])) {
            return false;
          }
        }
        return true;
      });
    }
  }

  handleGenreClear() {
    if (this.state.castFilters.length === 0) {
      this.setState({
        genreFilters: [],
        filteredVideos: this.state.results,
      });
    } else {
      this.setState({
        genreFilters: [],
        filteredVideos: this.getAllVideosFilteredByCast(this.state.castFilters),
      });
    }
  }

  handleCastClick(person_id) {
    if (this.state.castFilters.includes(person_id)) {
      // remove a filter
      let newCastFilters = this.state.castFilters.filter(
        (c) => c !== person_id
      );
      this.setState({
        castFilters: newCastFilters,
        filteredVideos:
          this.state.genreFilters.length === 0 && newCastFilters.length === 0
            ? this.state.results
            : this.state.results
                .filter((video) => {
                  // filter on genre first
                  if (this.state.genreFilters.length === 0) {
                    return true;
                  } else {
                    let videoGanresIdArray = video.genres.map(
                      (genre) => genre.id
                    );
                    for (let i = 0; i < this.state.genreFilters.length; i++) {
                      if (
                        !videoGanresIdArray.includes(this.state.genreFilters[i])
                      ) {
                        return false;
                      }
                    }
                    return true;
                  }
                })
                .filter((video) => {
                  // filter cast second
                  if (newCastFilters.length === 0) {
                    return true;
                  } else {
                    let videoCastIdsArray = video.cast.map(
                      (cast) => cast.person_id
                    );
                    for (let i = 0; i < newCastFilters.length; i++) {
                      if (!videoCastIdsArray.includes(newCastFilters[i])) {
                        return false;
                      }
                    }
                    return true;
                  }
                }),
      });
    } else {
      // filter further
      this.setState({
        castFilters: [...this.state.castFilters, person_id],
        filteredVideos: this.state.filteredVideos.filter((video) =>
          video.cast.map((cast) => cast.person_id).includes(person_id)
        ),
      });
    }
  }

  handleGenreClick(genre_id) {
    if (this.state.genreFilters.includes(genre_id)) {
      // remove a filter
      let newGenreFilters = this.state.genreFilters.filter(
        (g) => g !== genre_id
      );
      this.setState({
        genreFilters: newGenreFilters,
        filteredVideos:
          newGenreFilters.length === 0 && this.state.castFilters.length === 0
            ? this.state.results
            : this.state.results
                .filter((video) => {
                  // filter on genre first
                  if (newGenreFilters.length === 0) {
                    return true;
                  } else {
                    let videoGenresIdArray = video.genres.map(
                      (genre) => genre.id
                    );
                    for (let i = 0; i < newGenreFilters.length; i++) {
                      if (!videoGenresIdArray.includes(newGenreFilters[i])) {
                        return false;
                      }
                    }
                    return true;
                  }
                })
                .filter((video) => {
                  // filter cast second
                  if (this.state.castFilters.length === 0) {
                    return true;
                  } else {
                    let videoCastIdsArray = video.cast.map(
                      (cast) => cast.person_id
                    );
                    for (let i = 0; i < this.state.castFilters.length; i++) {
                      if (
                        !videoCastIdsArray.includes(this.state.castFilters[i])
                      ) {
                        return false;
                      }
                    }
                    return true;
                  }
                }),
      });
    } else {
      // filter further
      this.setState({
        genreFilters: [...this.state.genreFilters, genre_id],
        filteredVideos: this.state.filteredVideos.filter((video) =>
          video.genres.map((genre) => genre.id).includes(genre_id)
        ),
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
          handleCastClear={this.handleCastClear}
          videosToDisplay={this.state.filteredVideos}
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
