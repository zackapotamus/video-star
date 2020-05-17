import React from 'react';
// import { Link } from 'react-router-dom';
import moment from "moment";

const LentTable = (props) => {

  return (
    <div className="container">

      <div className="row justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">Title</th>
              <th scope="col">Synopsis</th>
              <th scope="col">Release Date</th>
              <th scope="col">Run Time</th>
              <th scope="col">To Whom</th>
              <th scope="col">Lending Date</th>
              <th scope="col">Returning Date</th>
              <th scope="col">Video Type</th>
            </tr>
          </thead>
          <tbody>
            {props.lentVideos.map((video, index) => {
              return (
                <tr key={index}>
                  <td><img src={`https://image.tmdb.org/t/p/w92${video.poster_path || "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"}`} alt="video poster" /></td>
                  <td>{video.title}</td>
                  <td>{video.vote_average}</td>
                  <td>{moment(video.release_date).format("MMMM Do, YYYY")}</td>
                  <td>{video.runtime}</td>
                  <td>{video.lend_borrow_name}</td>
                  <td>{moment(video.lend_borrow_date).format("MMMM Do, YYYY")}</td>
                  <td>{moment(video.lend_borrow_due_date).format("MMMM Do, YYYY")}</td>
                  <td>{video.video_type}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default LentTable;