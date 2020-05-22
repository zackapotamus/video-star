import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaCompactDisc } from "react-icons/fa";
import { FcDvdLogo } from "react-icons/fc";
import { AiOutlineCloudDownload } from "react-icons/ai";

const VideosTable = (props) => {
  // const [genreFilters, setGenreFilters] = useState([]);

  // // useEffect(() => {

  // // },[])
  // function handleGenreClick(id) {
  //   if (genreFilters.includes(id)) {
  //     setGenreFilters(genreFilters.filter(g => g !== id));
  //   } else {
  //     setGenreFilters([...genreFilters, id]);
  //   }
  // }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Poster</th>
              <th scope="col">Title</th>
              <th scope="col">Tagline</th>
              <th scope="col">Cast</th>
              <th scope="col">Release Date</th>
              <th scope="col">Status</th>
              <th scope="col">Genres</th>
              <th scope="col">Type</th>
              <th scope="col">Details</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.videosToDisplay
            .filter((video) => {
              if (props.genreFilters.length === 0) {
                return true;
              } else {
                let genreIdsArray = video.genres.map(genre => genre.id);
                for (let i=0; i < props.genreFilters.length; i++) {
                  if (!genreIdsArray.includes(props.genreFilters[i])) {
                    return false;
                  }
                }
                return true;
              }
            })
            .filter((video) => {
              if (props.castFilters.length === 0) {
                return true;
              } else {
                let castIdsArray = video.cast.map(cast => cast.person_id);
                for (let i=0; i < props.castFilters.length; i++) {
                  if (!castIdsArray.includes(props.castFilters[i])) {
                    return false;
                  }
                }
                return true;
              }
            })
            .map((video, index) => (
              <tr key={video.id}>
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
                <td>{video.cast.map((cast, index) => (
                  <a title={cast.character} key={cast.person_id} onClick={() => props.handleCastClick(cast.person_id)} className={`badge badge-pill filter-badge${props.castFilters.includes(cast.person_id) ? " badge-primary" : " badge-secondary"}`} style={{display: `${index < 7 ? "inline-block" : "none"}`, color: "white", fontSize: 10}}>{cast.name}</a>
                ))}</td>
                <td>{moment(video.release_date).format("MMMM Do, YYYY")}</td>
                <td>
                  {video.is_lent ? "Lent" : video.is_borrowed ? "Borrowed" : ""}
                </td>
                <td>{video.genres.map((genre, index) => (
                  <a key={genre.id} onClick={() => props.handleGenreClick(genre.id)} className={`badge badge-pill filter-badge${props.genreFilters.includes(genre.id) ? " badge-primary" : " badge-secondary"}`} style={{color: "white"}}>{genre.name}</a>
                ))}</td>
                <td>{video.video_type === "Blu-ray" ? <FaCompactDisc style={{fontSize: "30px", color: "blue"}}/> : (video.video_type === "DVD" ? <FcDvdLogo style={{fontSize: "41px"}}/> : <AiOutlineCloudDownload style={{fontSize: "34px"}}/>)}</td>
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
