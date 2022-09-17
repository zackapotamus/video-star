import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { GiCompactDisc } from "react-icons/gi";
import { FcDvdLogo } from "react-icons/fc";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Select from "react-select";
import VideoRow from "./VideoRow";

const VideosTable = (props) => {
  const handleSelectChange = (event) => {
    switch (event.action) {
      case "select-option":
        // console.log('event:', event);
        props.handleCastClick(event.option.value);
        break;
      case "remove-value":
        props.handleCastClick(event.removedValue.value);
        break;
      case "clear":
        props.handleCastClear();
        break;
      default:
        console.log("ERROR: ", event);
        break;
    }
  };

  const filteredGenres = Array.from(
    new Map(
      props.videosToDisplay.reduce((acc, curr) => {
        let mapped = curr.genres.map((current, index, array) => {
          return [current.id, { name: current.name, id: current.id }];
        });
        return [...acc, ...mapped];
      }, [])
    ).values()
  ).sort((a, b) => {
    return a.id - b.id;
  });

  const filteredCastMap = new Map();
  props.videosToDisplay.forEach((vid) => {
    vid.cast.forEach((c) => {
      filteredCastMap.set(c.person_id, {
        person_id: c.person_id,
        name: c.name,
      });
    });
  });

  const selectOptions = Array.from(filteredCastMap.values())
    .map((cast) => ({
      value: cast.person_id,
      label: cast.name,
    }))
    .sort(
      (a, b) =>
        props.castCountMap.get(b.value) - props.castCountMap.get(a.value)
    );

  const defaultValues = selectOptions.filter((o) => {
    return props.castFilters.includes(o.value);
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {filteredGenres.map((genre, index) => (
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
        <div className="row">
          <div className="col">
            <Select
              isMulti
              name="cast"
              value={defaultValues}
              options={selectOptions}
              placeholder={"Filter by cast..."}
              onChange={(values, event) => {
                handleSelectChange(event);
              }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        {props.videosToDisplay.map((video) => (
          <VideoRow
            key={video.id}
            video={video}
            handleCastClick={props.handleCastClick}
            handleGenreClick={props.handleGenreClick}
            castFilters={props.castFilters}
            genreFilters={props.genreFilters}
            castCountMap={props.castCountMap}
          />
        ))}
      </div>
    </>
  );
};

export default VideosTable;
