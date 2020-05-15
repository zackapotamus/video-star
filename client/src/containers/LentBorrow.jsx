import React, { Component } from "react";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from "../components/Shared/Hero/Hero";
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import LentTable from "../components/Shared/Table/LentTable";
import BorrowTable from "../components/Shared/Table/BorrowTable";
import API from "../utils/API";

import RetroCamera from "../img/retro-camera.jpg";
class LentBorrow extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      lentVideos: [],
      borrowedVideos: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.handleReturned = this.handleReturned.bind(this);
  }
  async componentDidMount() {
    let token = localStorage.getItem("jwt");
    let results = await API.getVideos(token);
    this.setState({ 
        token: token,
        lentVideos: results.data.filter(result => result.is_lent),
        borrowedVideos: results.data.filter(result => result.is_borrowed)
    });
  }
  render() {
    return (
      <>
        <NavBar2 />
        <Hero imageUrl={RetroCamera} />
        <GreyBlockTop page="Lent / Borrowed" />
        <h6 style={{ textAlign: "center" }}>LENT VIDEOS</h6>
        {/* TABLE OF LENT VIDEOS GOES HERE */}
        <LentTable lentVideos={this.state.lentVideos}></LentTable>
        <h6 style={{ textAlign: "center" }}>BORROWED VIDEOS</h6>
        {/* TABLE OF BORROWED VIDEOS GOES HERE */}
        <BorrowTable borrowedVideos={this.state.borrowedVideos}></BorrowTable>
        <GreyBlock />
      </>
    );
  }
}

export default LentBorrow;
