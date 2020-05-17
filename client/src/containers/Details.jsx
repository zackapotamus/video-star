import React, { Component } from "react";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import MovieCard from "../components/Shared/Card/MovieCard";
import API from "../utils/API";
import EmptyMovieSeats from "../img/cinema-empty-seats.jpg";

import React, { Component } from "react";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      video: {},
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const token = localStorage.getItem("jwt");
    let result = API.getVideo(this.props.match.params.id);
    this.setState({ token, video: result.data });
  }

  render() {
    return (
      <>
        <NavBar2 />
        <Hero imageUrl={EmptyMovieSeats} />
        <GreyBlockTop page="Details" />
        <div className="container-fluid bg-light py-3">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <MovieCard video={this.state.video}/>
            </div>
          </div>
        </div>

        <GreyBlock />
      </>
    );
  }
}

export default Details;
