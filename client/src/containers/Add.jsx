import React, { Component } from "react";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import API from "../utils/API";
import AddMovie from "../img/add-movie.jpg";
import TMDBTable from "../components/Shared/Table/TMDBTable";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      query: "",
      results: [],
      message: "",
      addedState: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleAddToLibrary = this.handleAddToLibrary.bind(this);
  }

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    this.setState({ token });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleAddToLibrary(index, videoType) {
    try {
      await API.addVideo(
        this.state.results[index].id,
        videoType,
        this.state.token
      );
      this.state.addedState[index][videoType] = true;
      this.setState({ addedState: this.state.addedState });
    } catch (err) {
      console.log(err);
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    let results = await API.searchMovies(this.state.token, this.state.query);
    this.setState({
      results: results.data,
      addedState: results.data.map((result) => ({
        DVD: false,
        "Blu-ray": false,
        Digital: false,
      })),
    });
    console.log(results.data);
  }

  render() {
    return (
      <>
        <NavBar2 />
        <Hero imageUrl={AddMovie} />
        <GreyBlockTop page="Add" />

        <div className="container" style={{ marginBottom: 100 }}>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card shadow">
                <div className="card-body">
                  <h2 className="card-title text-center">
                    Add a Video to your Library
                  </h2>
                </div>
                <form className="mb-4">
                  <div className="form-group px-5">
                    <label>Movie Title</label>
                    <div className="input-group">
                      <div className="input-group-append">
                        <button
                          className="btn-primary"
                          onClick={this.handleSubmit}
                        >
                          Search
                        </button>
                      </div>
                      <input
                        name="query"
                        type="title"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Search for a Movie"
                        value={this.props.queryValue}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <TMDBTable
            addedState={this.state.addedState}
            handleAddToLibrary={this.handleAddToLibrary}
            videosToDisplay={this.state.results}
          />
        </div>
        <GreyBlock />
      </>
    );
  }
}

export default Add;
