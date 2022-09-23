import React, { Component } from "react";
import API from "../utils/API";
import DetailsCard from "../components/Shared/Card/DetailsCard";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      video: {
        id: 0,
        genres: [],
        cast: [],
        runtime: 0,
        directors: [],
        release_date: new Date(),
      },
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
  }

  async deleteVideo(id) {
    let response = await API.deleteVideo(id);
    console.log(response);
  }

  async componentDidMount() {
    let result = await API.getVideo(this.props.match.params.id /*, token*/);
    this.setState({ video: result.data });
  }

  render() {
    return <DetailsCard video={this.state.video} />;
  }
}

export default Details;
