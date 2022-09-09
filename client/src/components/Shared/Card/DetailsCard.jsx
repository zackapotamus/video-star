import React from "react";
import { Link } from "react-router-dom";
import PlaceholderImage from "../../../img/videostar-placeholder.png";
import moment from "moment";

const DetailsCard = (props) => {
  function numberWithCommas(number) {
    if (!number) {
      return "";
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function formatRuntime(minutes) {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    if (hours) {
      if (minutes) {
        return `${hours} ${hours === 1 ? "hr" : "hrs"} ${mins} ${
          mins === 1 ? "min" : "mins"
        }`;
      } else {
        return `${hours} ${hours === 1 ? "hr" : "hrs"}`;
      }
    } else {
      return `${mins} minutes`;
    }
  }
  return (
    <section id="more-info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="more-info-header">More information about <b>{props.video.title}</b></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-6 col-12">
            <div className="row movie-dates">
              <div className="col-6">
                <h4 className="ttl">Release Date:</h4>
                <p className="info-descr">
                  {moment(props.video.release_date).format("D MMM YYYY")}
                </p>
              </div>
              <div className="col-6">
                <h4 className="ttl">Running time:</h4>
                <p className="info-descr">{props.video.runtime} minutes</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="text-content">
                  {props.video.overview}
                </p>
              </div>
            </div>
            <dl className="info-tbl">
              <div className="tbl-row movie-info">
                <dt className="tbl-cell-ttl ttl">Original title:</dt>
                <dd>{props.video.original_title}</dd>
              </div>
              <div className="tbl-row movie-info">
                <dt className="tbl-cell-ttl ttl">Movie genre{props.video.genres.length !== 1 ? 's' : ''}:</dt>
                <dd>{props.video.genres.map(g=>g.name).join(", ")}</dd>
              </div>
              <div className="tbl-row movie-info">
                <dt className="tbl-cell-ttl ttl">Cast:</dt>
                <dd>{props.video.cast.map(c=>c.name).splice(0,9).join(", ")}</dd>
              </div>
              <div className="tbl-row movie-info">
                <dt className="tbl-cell-ttl ttl">Director{props.video.directors.length !== 1 ? "s" : ""}:</dt>
                <dd>{props.video.directors.map(d=>d.name).join(", ")}</dd>
              </div>
              <div className="tbl-row movie-info">
                <dt className="tbl-cell-ttl ttl">Budget:</dt>
                <dd>{`$${numberWithCommas(props.video.budget)}`}</dd>
              </div>
              {/* <div className="tbl-row movie-info">
                <dt className="tbl-cell-ttl ttl">Age restrictions:</dt>
                <dd>{props.video.adult ? "Restricted" : "Not restricted"}</dd>
              </div> */}
            </dl>
          </div>
          <div className="col-md-4 col-sm-6 offset-sm-0 col-6 offset-3">
            <div>
              <div className="loaded" style={{ background: "rgb(0, 0, 0)"}}>
                <img
                  src={
                    props.video.poster_path
                      ? `https://image.tmdb.org/t/p/w300${props.video.poster_path}`
                      : PlaceholderImage
                  }
                  alt={props.video.title}
                  data-err={PlaceholderImage}
                  className="img-responsive poster v-lazy-loaded v-lazy-loading"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
