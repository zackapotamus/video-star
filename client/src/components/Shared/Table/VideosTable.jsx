import React from "react";
import VideoRow from "./VideoRow";
import { Link } from "react-router-dom";

const VideosTable = (props) => {
  if (props.videosToDisplay.length === 0) {
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col text-center">
            <h4>
              <Link to="/add" style={{ textDecoration: "underline" }}>
                Search for a Movie to Add
              </Link>
            </h4>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mb-5">
      {props.videosToDisplay.map((video) => (
        <VideoRow
          key={video.id}
          video={video}
          handleCastClick={props.handleCastClick}
          handleGenreClick={props.handleGenreClick}
          castFilters={props.castFilters}
          genreFilters={props.genreFilters}
          castCountMap={props.castCountMap}
        />
      ))}
    </div>
  );
};

export default VideosTable;
