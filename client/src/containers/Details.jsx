import React, { Component } from "react";
import API from "../utils/API";
import DetailsCard from "../components/Shared/Card/DetailsCard";
import DeleteButton from "../components/Shared/Button/DeleteButton";

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
      deleteConfirm: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
  }

  async deleteVideo() {
    try {
      let result = await API.deleteVideo(this.state.video.id);
      if (result.data.success) {
        this.props.history.push('/library');
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      let result = await API.getVideo(this.props.match.params.id /*, token*/);
      if (result.status === 200) {
        this.setState({ video: result.data });
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <DetailsCard video={this.state.video} />
        {/* <button disabled={!this.state.video.id} onClick={this.deleteVideo}>Delete</button> */}
        <DeleteButton handleDelete={this.deleteVideo} />
      </>
    );
  }
}

export default Details;
