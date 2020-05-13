import React from 'react';
import { Link } from 'react-router-dom';

const MoviesTable = (props) => {

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
            </tr>
          </thead>
          <tbody>
            {props.moviesToDisplay.map((movie, index) => {
              return (
                <tr key={index}>
                  <td><img src={movie.poster_path} alt="movie poster" /></td>
                  <td>{movie.original_title}</td>
                  <td>{movie.overview}</td>
                  <td>{movie.popularity}</td>
                  <td>{movie.release_date}</td>
                  <td>{movie.runtime}</td>
                  <td>{movie.is_lent}</td>
                  <td>{movie.is_borrowed}</td>
                  <td>
                    <Link to={{
                      pathname: "/details",
                      state: {
                        movie: movie 
                      }
                    }} id={movie.id} className="btn btn-outline-success my-2 my-sm-0" role="button">Details
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

export default MoviesTable;