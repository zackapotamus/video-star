import React, { Component } from "react";
// import NavBar2 from "../components/Shared/NavBar/NavBar2";
import NavBarNew from "../components/Shared/NavBar/NavBarNew";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
// import MovieCard from "../components/Shared/Card/MovieCard";
import API from "../utils/API";
import EmptyMovieSeats from "../img/cinema-empty-seats.jpg";
import DetailsCard from "../components/Shared/Card/DetailsCard";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      video: { genres: [], cast: [], runtime: 0},
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    let result = await API.getVideo(this.props.match.params.id/*, token*/);
    this.setState({ video: result.data });
  }

  render() {
    return (
      <>
        {/* <NavBar2 /> */}
        <NavBarNew />
        {/* <Hero imageUrl={EmptyMovieSeats} /> */}
        {/* <GreyBlockTop page="Details" /> */}
        {/* <div className="container-fluid bg-light py-3"> */}
          {/* <div className="row"> */}
            {/* <div className="col-md-6 mx-auto"> */}
              {/* <MovieCard video={this.state.video}/> */}
              <DetailsCard video={this.state.video} />
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}

        <GreyBlock />
      </>
    );
  }
}

export default Details;
