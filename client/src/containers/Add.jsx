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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
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

  async handleSubmit(event) {
    event.preventDefault();
    let results = await API.searchMovies(this.state.token, this.state.query);
    this.setState({ results: results.data });
  }

  render() {
    return (
      <>
        <NavBar2 />
        <Hero imageUrl={AddMovie} />
        <GreyBlockTop page="Add" />

        <div className="container" style={{ marginBottom: 100 }}>
          <div class="row">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Add a Video to your Library</h2>
                </div>
                <form>
                  <div className="form-group px-5">
                    <label for="exampleFormControlInput1">Movie Title</label>
                    <input
                      name="query"
                      type="title"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Search for a Movie"
                      value={this.props.queryValue}
                      onChange={this.handleChange}
                    />
                    <button className="btn-primary" onClick={this.handleSubmit}>
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <TMDBTable videosToDisplay={this.state.results} />
        </div>
        <GreyBlock />
      </>
    );
  }
}

export default Add;
