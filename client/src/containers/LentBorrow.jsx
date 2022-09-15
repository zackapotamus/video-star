import React, { Component } from "react";
import NavBarNew from "../components/Shared/NavBar/NavBarNew";
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
      lentVideos: [],
      borrowedVideos: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  async componentDidMount() {
    let results = await API.getVideos();
    this.setState({ 
        lentVideos: results.data.filter(result => result.is_lent),
        borrowedVideos: results.data.filter(result => result.is_borrowed)
    });
  }
  render() {
    return (
      <>
        {/* <NavBarNew /> */}
        {/* <Hero imageUrl={RetroCamera} /> */}
        <GreyBlockTop page="Lent / Borrowed" />
        <h4 style={{ textAlign: "center" }}>LENT VIDEOS</h4>
        {/* TABLE OF LENT VIDEOS GOES HERE */}
        <LentTable lentVideos={this.state.lentVideos}></LentTable>
        <h4 style={{ textAlign: "center" }}>BORROWED VIDEOS</h4>
        {/* TABLE OF BORROWED VIDEOS GOES HERE */}
        <BorrowTable borrowedVideos={this.state.borrowedVideos}></BorrowTable>
        <GreyBlock />
      </>
    );
  }
}

export default LentBorrow;
