import React from "react";
// import { Link } from "react-router-dom";
import moment from "moment";
import PlaceholderImage from "../../../img/videostar-placeholder.png";
// import GreyBlockTop from "../GreyBlockTop/GreyBlockTop";

const TMDBTable = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">Title</th>
              <th scope="col">Overview</th>
              <th scope="col">Popularity</th>
              <th scope="col">Release Date</th>
              {/* <th scope="col">Run Time</th> */}
              {/* <th scope="col">Details</th> */}
              <th scope="col">Add To Library</th>
            </tr>
          </thead>
          <tbody>
            {props.videosToDisplay.map((video, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={
                        video.poster_path
                          ? `https://image.tmdb.org/t/p/w92${video.poster_path}`
                          : PlaceholderImage
                      }
                      alt="video poster"
                    />
                  </td>
                  <td>{video.title}</td>
                  <td>{video.overview}</td>
                  <td>{video.vote_average}</td>

                  <td>{moment(video.release_date).format("MMMM Do, YYYY")}</td>
                  {/* <td>{video.runtime} mins</td> */}
                  {/* <td>
                    <Link
                      to={{
                        pathname: `/details/${video.id}`
                      }}
                      className="btn btn-sm btn-outline-success my-2 my-sm-0"
                      role="button"
                    >
                      Details
                    </Link>
                  </td> */}
                  <td style={{width: 140}}>
                    <div class="btn-group-vertical">
                    <button
                      disabled={!!props.addedState[index]["Blu-ray"]}
                      onClick={() => {
                        props.handleAddToLibrary(index, "Blu-ray");
                      }}
                      id={video.id}
                      className="btn btn-sm btn-outline-success my-2 my-sm-0"
                      // role="button"
                    >
                      {props.addedState[index]["Blu-ray"] ? "Added" : "Add Blu-ray"}
                    </button>
                    <button
                      disabled={!!props.addedState[index]["DVD"]}
                      onClick={() => {
                        props.handleAddToLibrary(index, "DVD");
                      }}
                      id={video.id}
                      className="btn btn-sm btn-outline-success my-2 my-sm-0"
                      // role="button"
                    >
                      {props.addedState[index]["DVD"] ? "Added" : "Add DVD"}
                    </button>
                    <button
                      disabled={!!props.addedState[index]["Digital"]}
                      onClick={() => {
                        props.handleAddToLibrary(index, "Digital");
                      }}
                      id={video.id}
                      className="btn btn-sm btn-outline-success my-2 my-sm-0"
                      // role="button"
                    >
                      {props.addedState[index]["Digital"] ? "Added" : "Add Digital"}
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TMDBTable;
