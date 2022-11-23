import React from "react";
import moment from "moment";
import PlaceholderImage from "../../../img/videostar-placeholder.png";
import { GiCompactDisc } from "react-icons/gi";
import { FcDvdLogo } from "react-icons/fc";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Link } from "react-router-dom";

function VideoRow(props) {
  return (
    <div className="row video-row" id={props.video.id}>
      <div className="col">
        <div className="row">
          <div className="h5 col-10">
            <Link to={{ pathname: `/details/${props.video.id}` }}>
              <h5 className="text-body mt-2 mb-0">{`${
                props.video.title
              } (${moment(props.video.release_date).format("YYYY")})`}</h5>
            </Link>
          </div>
          <div className="col-2 text-center pr-0 pl-0 mt-1">
            {props.video.video_type === "Blu-ray" ? (
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
            )}
          </div>
        </div>
        <div className="row">
          <div
            className="col-3 col-sm-3 col-md-2 pl-0 pr-0"
            style={{ marginLeft: "1px" }}
          >
            <Link to={{ pathname: `/details/${props.video.id}` }}>
              <img
                className="video-poster"
                // src={`https://image.tmdb.org/t/p/w92${
                //   video.poster_path || "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
                // }`}
                src={
                  props.video.poster_path
                    ? `https://image.tmdb.org/t/p/w92${props.video.poster_path}`
                    : PlaceholderImage
                }
                alt={`poster for ${props.video.title}`}
              />
            </Link>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-7 col-sm-8 pr-1 pl-2">
                <div
                  className="overflow-auto cast-cell"
                  style={{ height: "138px" }}
                >
                  {props.video.cast.map((cast) => (
                    <a
                      title={cast.character || "?"}
                      key={cast.id}
                      onClick={() => props.handleCastClick(cast.person_id)}
                      className={`badge badge-pill filter-badge${
                        props.castFilters.includes(cast.person_id)
                          ? " badge-primary text-white"
                          : cast.character.includes("uncredited")
                          ? " badge-light text-black"
                          : " badge-secondary text-white"
                      }`}
                      style={{
                        display: `${
                          cast.order <= 10 ||
                          !!props.castCountMap.get(cast.person_id)
                            ? "inline-block"
                            : "none"
                        }`,
                        // color: `${cast.character.includes('uncredited') ? "black" : "white"}`,
                        fontSize: 10,
                      }}
                    >
                      {cast.name}
                    </a>
                  ))}
                </div>
              </div>
              <div
                className="col-5 col-sm-4 pl-1 pr-2"
                style={{ overflow: "hidden" }}
              >
                {props.video.genres.map((genre) => (
                  <a
                    key={genre.id}
                    onClick={() => props.handleGenreClick(genre.id)}
                    className={`badge badge-pill filter-badge${
                      props.genreFilters.includes(genre.id)
                        ? " badge-info"
                        : " badge-secondary"
                    }`}
                    style={{ color: "white" }}
                  >
                    {genre.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col font-italic text-center">
            <h6 className="text-secondary">{`"${props.video.tagline}"`}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
