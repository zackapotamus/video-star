import React, { Component } from "react";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import API from "../utils/API";
import DetailsCard from "../components/Shared/Card/DetailsCard";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      video: {
        id: this.props.match.params.id || 0,
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

  async deleteVideo()

  async componentDidMount() {
    let result = await API.getVideo(this.props.match.params.id /*, token*/);
    this.setState({ video: result.data });
  }

  render() {
    return <DetailsCard video={this.state.video} />;
  }
}

export default Details;
