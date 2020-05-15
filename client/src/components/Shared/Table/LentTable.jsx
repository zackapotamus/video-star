import React from 'react';
import { Link } from 'react-router-dom';

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
            {props.videosToDisplay.map((video, index) => {
              return (
                <tr key={index}>
                  <td><img src={video.poster_path} alt="video poster" /></td>
                  <td>{video.title}</td>
                  <td>{video.vote_average}</td>
                  <td>{video.release_date}</td>
                  <td>{video.runtime}</td>
                  <td>{video.lend_borrow_name}</td>
                  <td>{video.lend_borrow_date}</td>
                  <td>{video.lend_borrow_due_date}</td>
                  <td>
                    <Link to={{
                      pathname: "/details",
                      state: {
                        video: video 
                      }
                    }} id={video.id} className="btn btn-outline-success my-2 my-sm-0" role="button">Details
                    </Link>
                  </td>
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