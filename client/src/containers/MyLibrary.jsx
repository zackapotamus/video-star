import React, { Component } from "react";
import API from "../utils/API";
import VideosTable from "../components/Shared/Table/VideosTable";
import Select from "react-select";

class MyLibrary extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      resultCast: [],
      resultGenres: [],
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
    this.getAllVideosFilteredByCast =
      this.getAllVideosFilteredByCast.bind(this);
    this.getAllVideosFilteredByGenre =
      this.getAllVideosFilteredByGenre.bind(this); // why again?
    this.updateVideos = this.updateVideos.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
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
    this.updateVideos({
      results: results.data,
      castCountMap: castCountMap,
      filteredVideos: results.data,
    });
  }

  handleSelectChange(event) {
    switch (event.action) {
      case "select-option":
        // console.log('event:', event);
        this.handleCastClick(event.option.value);
        break;
      case "remove-value":
        this.handleCastClick(event.removedValue.value);
        break;
      case "clear":
        this.handleCastClear();
        break;
      default:
        console.log("ERROR: ", event);
        break;
    }
  }

  handleCastClear() {
    this.updateVideos({
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

  updateVideos(pendingState) {
    // console.log("updateVideos", pendingState);
    if (!pendingState.filteredVideos) {
      this.setState({ ...pendingState });
      return true;
    }
    if (
      !pendingState.results &&
      pendingState.castFilters &&
      !pendingState.genreFilters
    ) {
      if (
        pendingState.castFilters.length === 0 &&
        this.state.genreFilters.length === 0
      ) {
        this.setState({
          ...pendingState,
          filteredCast: this.state.resultCast,
          filteredGenres: this.state.resultGenres,
        });
        return true;
      }
    }
    if (
      !pendingState.results &&
      pendingState.genreFilters &&
      !pendingState.castFilters
    ) {
      if (
        pendingState.genreFilters.length === 0 &&
        this.state.castFilters.length === 0
      ) {
        this.setState({
          ...pendingState,
          filteredCast: this.state.resultCast,
          filteredGenres: this.state.resultGenres,
        });
        return true;
      }
    }
    const filteredCastMap = new Map();
    const filteredGenresMap = new Map();
    pendingState.filteredVideos.forEach((vid) => {
      vid.cast.forEach((c) => {
        filteredCastMap.set(c.person_id, {
          person_id: c.person_id,
          name: c.name,
        });
      });
      vid.genres.forEach((g) => {
        filteredGenresMap.set(g.id, { id: g.id, name: g.name });
      });
    });
    const filteredCast = Array.from(filteredCastMap.values()).sort((a, b) => {
      return (
        (pendingState.castCountMap || this.state.castCountMap).get(
          b.person_id
        ) -
        (pendingState.castCountMap || this.state.castCountMap).get(a.person_id)
      );
    });
    const filteredGenres = Array.from(filteredGenresMap.values()).sort(
      (a, b) => {
        return a.id - b.id;
      }
    );
    if (pendingState.results) {
      this.setState({
        ...pendingState,
        resultCast: filteredCast,
        resultGenres: filteredGenres,
        filteredCast: filteredCast,
        filteredGenres: filteredGenres,
      });
    } else {
      this.setState({
        ...pendingState,
        filteredCast: filteredCast,
        filteredGenres: filteredGenres,
      });
    }
  }

  handleGenreClear() {
    if (this.state.castFilters.length === 0) {
      this.updateVideos({
        genreFilters: [],
        filteredVideos: this.state.results,
      });
    } else {
      this.updateVideos({
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
      this.updateVideos({
        castFilters: newCastFilters,
        filteredVideos:
          this.state.genreFilters.length === 0 && newCastFilters.length === 0
            ? this.state.results
            : this.getAllVideosFilteredByGenre(this.state.genreFilters).filter(
                (video) => {
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
                }
              ),
      });
    } else {
      // filter further
      let filteredVids = this.state.filteredVideos.filter((video) =>
        video.cast.map((cast) => cast.person_id).includes(person_id)
      );
      this.updateVideos({
        castFilters: [...this.state.castFilters, person_id],
        filteredVideos: filteredVids,
      });
    }
  }

  handleGenreClick(genre_id) {
    if (this.state.genreFilters.includes(genre_id)) {
      // remove a filter
      let newGenreFilters = this.state.genreFilters.filter(
        (g) => g !== genre_id
      );
      this.updateVideos({
        genreFilters: newGenreFilters,
        filteredVideos:
          newGenreFilters.length === 0 && this.state.castFilters.length === 0
            ? this.state.results
            : this.getAllVideosFilteredByGenre(newGenreFilters).filter(
                (video) => {
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
                }
              ),
      });
    } else {
      // filter further
      this.updateVideos({
        genreFilters: [...this.state.genreFilters, genre_id],
        filteredVideos: this.state.filteredVideos.filter((video) =>
          video.genres.map((genre) => genre.id).includes(genre_id)
        ),
      });
    }
  }

  async handleDelete(id) {
    try {
      let result = await API.deleteVideo(id);
      if (result.data.success) {
        this.updateVideos({
          results: this.state.results.filter(r => r.id !== id),
          filteredVideos: this.state.filteredVideos.filter(v => v.id !== id),
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const selectOptions = this.state.filteredCast.map((cast) => ({
      value: cast.person_id,
      label: cast.name,
    }));
    // console.log(selectOptions);
    const defaultValues = selectOptions.filter((o) => {
      return this.state.castFilters.includes(o.value);
    });
    return (
      <>
        <div className="container" style={{ marginTop: "76px" }}>
          <div className="row">
            <div className="col text-center mb-2">
              <h1>Video Library</h1>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              {this.state.filteredGenres.map((genre, index) => (
                <a
                  key={genre.id}
                  onClick={() => this.handleGenreClick(genre.id)}
                  className={`badge badge-pill filter-badge${
                    this.state.genreFilters.includes(genre.id)
                      ? " badge-info"
                      : " badge-secondary"
                  }`}
                  style={{ color: "white" }}
                >
                  {genre.name}
                </a>
              ))}
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <Select
                isMulti
                enterkeyhint="go"
                name="cast"
                value={defaultValues}
                options={selectOptions}
                placeholder={"Filter by cast..."}
                onChange={(values, event) => {
                  this.handleSelectChange(event);
                }}
              />
            </div>
          </div>
        </div>

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

        <div height="100" />
      </>
    );
  }
}

export default MyLibrary;
