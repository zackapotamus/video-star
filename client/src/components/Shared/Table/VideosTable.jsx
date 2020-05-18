import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaCompactDisc } from "react-icons/fa";
import { FcDvdLogo } from "react-icons/fc";
import { AiOutlineCloudDownload } from "react-icons/ai";

const VideosTable = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">Title</th>
              <th scope="col">Tagline</th>
              <th scope="col">Popularity</th>
              <th scope="col">Release Date</th>
              <th scope="col">Status</th>
              {/* <th scope="col">Is It Borrowed?</th> */}
              <th scope="col">Type</th>
              <th scope="col">Details</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.videosToDisplay.map((video, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={`https://image.tmdb.org/t/p/w92${
                      video.poster_path || "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
                    }`}
                    alt="video poster"
                  />
                </td>
                <td>{video.original_title}</td>
                <td>{video.tagline}</td>
                <td>{video.popularity}</td>
                <td>{moment(video.release_date).format("MMMM Do, YYYY")}</td>
                <td>
                  {video.is_lent ? "Lent" : video.is_borrowed ? "Borrowed" : ""}
                </td>
                {/* <td>{video.is_borrowed}</td> */}
                {/* <td>{video.video_type}</td> */}
                <td>{video.video_type === "Blu-Ray" ? <FaCompactDisc style={{fontSize: "30px", color: "blue"}}/> : (video.video_type === "DVD" ? <FcDvdLogo style={{fontSize: "41px"}}/> : <AiOutlineCloudDownload style={{fontSize: "34px"}}/>)}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/details/${video.id}`,
                    }}
                    className="btn btn-outline-success my-2 my-sm-0"
                    role="button"
                  >
                    Details
                  </Link>
                </td>
                {/* delete button to remove the video from the table */}
                <td>
                  <button
                    className="btn btn-outline-danger my-2 my-sm-0"
                    // role="button"
                    id={video.id}
                    onClick={() => {
                      props.handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideosTable;
