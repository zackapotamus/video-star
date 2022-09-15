import React from "react";
import moment from "moment";
import PlaceholderImage from "../../../img/videostar-placeholder.png";
import { GiCompactDisc } from "react-icons/gi";
import { FcDvdLogo } from "react-icons/fc";
import { AiOutlineCloudDownload } from "react-icons/ai";

function VideoRow(props) {
  return (
    <div class="row" key={props.video.id}>
      <div class="col">
        <div class="row">
          <div class="h4 col-9 bg-primary">
            <Link to={{ pathname: `/details/${props.video.id}` }}>
              `${props.video.title} ($
              {moment(props.video.release_date).format("YYYY")})`
            </Link>
          </div>
          <div class="col bg-secondary">
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
              <FcDvdLogo style={{ fontSize: "41px" }} />
            ) : (
              <AiOutlineCloudDownload style={{ fontSize: "30px" }} />
            )}
          </div>
        </div>
        <div class="row">
          <div class="col-4 col-sm-3 col-md-2 bg-success">
            <Link to={{ pathname: `/details/${props.video.id}` }}>
              <img
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
          <div class="col bg-warning">
            <div class="row">
              <div class="col-6 col-sm-8 bg-danger">
                <div class="overflow-auto cast-cell" style="height: 138px;">
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
              <div class="col-4">
                {props.video.genres.map((genre) => (
                  <a
                    key={genre.id}
                    onClick={() => props.handleGenreClick(genre.id)}
                    className={`badge badge-pill filter-badge${
                      props.genreFilters.includes(genre.id)
                        ? " badge-primary"
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
        <div class="row">
          <div class="col font-italic text-center bg-info">
            ${`"${props.video.tagline}"`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
