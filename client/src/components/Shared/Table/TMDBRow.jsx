import React from "react";
import moment from "moment";
import PlaceholderImage from "../../../img/videostar-placeholder.png";

/*
{
    "popularity": 103.049,
    "vote_count": 19498,
    "video": false,
    "poster_path": "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    "id": 284054,
    "adult": false,
    "backdrop_path": "/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
    "original_language": "en",
    "original_title": "Black Panther",
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        }
    ],
    "title": "Black Panther",
    "vote_average": 7.4,
    "overview": "King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantle to join with ex-girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    "release_date": "2018-02-13"
}
*/

function TMDBRow(props) {
  return (
    <div className="row video-row">
      <div className="col">
        <div className="row">
          <div className="h5 col-10">
            <h5 className="text-body mt-2 mb-0">{`${
              props.video.title
            } (${moment(props.video.release_date).format("YYYY")})`}</h5>
          </div>
          <div className="col-2 text-left pr-0 pl-0 mt-2">
            {/* {props.video.video_type === "Blu-ray" ? (
              <GiCompactDisc
                style={{
                  fontSize: "30px",
                  color: "#054281",
                  backgroundImage: "-webkit-linear-gradient(#054281, #0f77ad)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
            ) : props.video.video_type === "DVD" ? (
              <FcDvdLogo style={{ fontSize: "30px" }} />
            ) : (
              <AiOutlineCloudDownload style={{ fontSize: "30px" }} />
            )} */}
            {moment(props.video.release_date).format("MMM D")}
          </div>
        </div>
        <div className="row">
          <div
            className="col-3 col-sm-3 col-md-2 pl-0 pr-0"
            style={{ marginLeft: "1px" }}
          >
            <img
              className="video-poster"
              src={
                props.video.poster_path
                  ? `https://image.tmdb.org/t/p/w92${props.video.poster_path}`
                  : PlaceholderImage
              }
              alt={`poster for ${props.video.title}`}
            />
          </div>
          <div className="col">
            <div className="row">
              <div className="col-7 col-sm-8 pr-1 pl-2">
                <div
                  className="overflow-auto cast-cell"
                  style={{ height: "138px" }}
                >
                  {props.video.overview}
                </div>
              </div>
              <div
                className="col-5 col-sm-4 pl-1 pr-2"
                style={{ overflow: "hidden" }}
              >
                <div className="btn-group-vertical">
                  <button
                    disabled={!!props.addedState[props.index]["Blu-ray"]}
                    onClick={() => {
                      props.handleAddToLibrary(props.index, "Blu-ray");
                    }}
                    id={props.video.id}
                    className="btn btn-sm btn-outline-success my-1"
                    // role="button"
                  >
                    {props.addedState[props.index]["Blu-ray"]
                      ? "Added"
                      : "Add Blu-ray"}
                  </button>
                  <button
                    disabled={!!props.addedState[props.index]["DVD"]}
                    onClick={() => {
                      props.handleAddToLibrary(props.index, "DVD");
                    }}
                    id={props.video.id}
                    className="btn btn-sm btn-outline-success my-1"
                    // role="button"
                  >
                    {props.addedState[props.index]["DVD"] ? "Added" : "Add DVD"}
                  </button>
                  <button
                    disabled={!!props.addedState[props.index]["Digital"]}
                    onClick={() => {
                      props.handleAddToLibrary(props.index, "Digital");
                    }}
                    id={props.video.id}
                    className="btn btn-sm btn-outline-success my-1"
                    // role="button"
                  >
                    {props.addedState[props.index]["Digital"]
                      ? "Added"
                      : "Add Digital"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            {/* <h6 className="text-secondary">{`"${props.video.tagline}"`}</h6> */}
            {props.video.genres.map((genre) => (
              <a
                key={genre.id}
                className={"badge badge-pill filter-badge badge-info"}
                style={{ color: "white" }}
              >
                {genre.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TMDBRow;
