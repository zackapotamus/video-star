import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

const TMDBTable = (props) => {

  return (
    <div className="container">

      <div className="row justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">Title</th>
              {/* <th scope="col">Synopsis</th> */}
              <th scope="col">Popularity</th>
              <th scope="col">Release Date</th>
              <th scope="col">Run Time</th>
              <th scope="col">Add To Library</th>
            </tr>
          </thead>
          <tbody>
            {props.videosToDisplay.map((video, index) => {
              return (
                <tr key={index}>
                  <td><img src={video.poster_path ? `https://image.tmdb.org/t/p/w92${video.poster_path}` : "path_to_o"} alt="video poster" /></td>
                  <td>{video.title}</td>
                  
                  <td>{video.vote_average}</td>
                  
                  <td>{moment(video.release_date).format('MMMM Do, YYYY')}</td>
                  <td>{video.runtime} mins</td>
                  <td>
                    <Link to={{
                      pathname: "/details",
                      state: {
                        video: video 
                      }
                    }} id={video.id} className="btn btn-outline-success my-2 my-sm-0" role="button">Details
                    </Link>
                  </td>
                  <td>
                    <Link to={{
                      pathname: "/api/videos/:id",
                      state: {
                        video: video 
                      }
                    }} id={video.id} className="btn btn-outline-success my-2 my-sm-0" role="button">Add To Library
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

export default TMDBTable;