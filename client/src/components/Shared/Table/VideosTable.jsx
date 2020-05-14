import React from "react";
import { Link } from "react-router-dom";

const VideosTable = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">Title</th>
              <th scope="col">Synopsis</th>
              <th scope="col">Popularity</th>
              <th scope="col">Release Date</th>
              <th scope="col">Run Time</th>
              <th scope="col">Lent</th>
              <th scope="col">Borrowed</th>
              <th scope="col">Type</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {props.videosToDisplay.map((video, index) => (
              <tr key={index}>
                <td>
                  <img src={`https://image.tmdb.org/t/p/w92${video.poster_path || "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"}`} alt="video poster" />
                </td>
                <td>{video.original_title}</td>
                <td>{video.overview}</td>
                <td>{video.popularity}</td>
                <td>{video.release_date}</td>
                <td>{video.runtime} mins</td>
                <td>{video.is_lent}</td>
                <td>{video.is_borrowed}</td>
                <td>{video.video_type}</td>
                <td>
                  <Link
                    to={{
                      pathname: "/details",
                      state: {
                        video: video,
                      },
                    }}
                    id={video.id}
                    className="btn btn-outline-success my-2 my-sm-0"
                    role="button"
                  >
                    Details
                  </Link>
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
