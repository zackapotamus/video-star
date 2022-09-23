import React, { Component, createRef } from "react";
import API from "../utils/API";
import TMDBRow from "../components/Shared/Table/TMDBRow";
import { FaSearch } from "react-icons/fa"
class Add extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      results: [],
      message: "",
      addedState: [],
    };
    this.movieSearchInput = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.handleAddToLibrary = this.handleAddToLibrary.bind(this);
  }

  // componentDidMount() {
  //   // const token = localStorage.getItem("jwt");
  //   // this.setState({ token });
  // }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  selectInputText = () => {
    this.movieSearchInput.current.focus();
    this.movieSearchInput.current.select();
  };

  async handleAddToLibrary(index, videoType) {
    try {
      await API.addVideo(this.state.results[index].id, videoType);
      this.state.addedState[index][videoType] = true;
      this.setState({ addedState: this.state.addedState });
    } catch (err) {
      console.log(err);
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    let results = await API.searchMovies(this.state.query);
    this.setState({
      results: results.data,
      addedState: results.data.map((result) => ({
        DVD: false,
        "Blu-ray": false,
        Digital: false,
      })),
    });
    this.movieSearchInput.current.blur();
    // console.log(results.data);
  }

  render() {
    return (
      <>

        <div className="container" style={{ marginBottom: 69, marginTop: 128}}>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card shadow">
                <div className="card-body">
                  <h2 className="card-title text-center">
                    Add a Movie
                  </h2>
                </div>
                <form className="mb-4">
                  <div className="form-group px-4">
                    <label>Movie Title</label>
                    <div className="input-group">
                      <input
                        ref={this.movieSearchInput}
                        name="query"
                        type="search"
                        enterkeyhint="search"
                        className="form-control"
                        id="movieSearchInput"
                        placeholder="Search for a Movie"
                        value={this.props.queryValue}
                        onChange={this.handleChange}
                        onClick={this.selectInputText}
                      />
                      <div className="input-group-append">
                        <button
                          // type="button"
                          className="btn-primary"
                          onClick={this.handleSubmit}
                        >
                          <FaSearch />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-5" style={this.state.results.length === 0 ? {marginTop: "462px"} : {}}>
          {/* <TMDBTable
            addedState={this.state.addedState}
            handleAddToLibrary={this.handleAddToLibrary}
            videosToDisplay={this.state.results}
          /> */}
          {this.state.results.map((video, index) => (
            <TMDBRow
              key={video.id}
              addedState={this.state.addedState}
              handleAddToLibrary={this.handleAddToLibrary}
              index={index}
              video={video}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Add;
