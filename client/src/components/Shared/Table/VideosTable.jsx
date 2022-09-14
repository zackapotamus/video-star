import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { GiCompactDisc } from "react-icons/gi";
import { FcDvdLogo } from "react-icons/fc";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Select from "react-select";

const VideosTable = (props) => {
  const [genreFilters, setGenreFilters] = useState(props.genreFilters);
  const [displayVids, setDisplayVids] = useState(props.videosToDisplay);

  useEffect(() => {
    console.log("VideosTable useEffects onMount");
    // setGenreFilters(props.genreFilters);
    // setDisplayVids(props.videosToDisplay);
    console.log(props);
  },[]);
  // function handleGenreClick(id) {
  //   if (genreFilters.includes(id)) {
  //     setGenreFilters(genreFilters.filter(g => g !== id));
  //   } else {
  //     setGenreFilters([...genreFilters, id]);
  //   }
  // }

  // console.log(filteredVideos);
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

  // const filteredCast = Array.from(
  //   new Map(
  //     filteredVideos.reduce((acc, curr) => {
  //       let mapped = curr.cast
  //         .filter((c) => {
  //           return c.order <= 10 || !!props.castCountMap.get(c.person_id);
  //         })
  //         .map((current, index, array) => {
  //           return [
  //             current.person_id,
  //             { person_id: current.person_id, name: current.name },
  //           ];
  //         });
  //       // console.log([...acc, ...mapped]);
  //       return [...acc, ...mapped];
  //     }, [])
  //   ).values()
  // ).sort((a, b) => {
  //   return (
  //     (props.castCountMap.get(b.person_id) ?? 0) -
  //       (props.castCountMap.get(a.person_id) ?? 0) ||
  //     a.order - b.order ||
  //     a.name.localeCompare(b.name)
  //   );
  // });

  const filteredCastMap = new Map();
  props.videosToDisplay.forEach((vid) => {
    vid.cast.forEach((c) => {
      filteredCastMap.set(c.person_id, {
        person_id: c.person_id,
        name: c.name,
      });
    });
  });
  const filteredCast = Array.from(filteredCastMap.values()).sort((a, b) => {
    return (
      props.castCountMap.get(b.person_id) -
        props.castCountMap.get(a.person_id) ||
      a.order - b.order ||
      a.name.localeCompare(b.name)
    );
  });
  // console.log(filteredCast);

  const selectOptions = Array.from(filteredCastMap.values())
    .map((cast) => ({
      value: cast.person_id,
      label: cast.name,
    }))
    .sort(
      (a, b) =>
        props.castCountMap.get(b.value) - props.castCountMap.get(a.value)
    );
  console.log(selectOptions);
  // console.log(props.castFilters);
  const defaultValues = selectOptions.filter((o) => {
    return props.castFilters.includes(o.value);
  });
  console.log(defaultValues);

  const stupidOptions = [{value: 1, label: "one"}, {value: 2, label: "two"}, {value: 3, label: "three"}];
  const stupidDefault = [stupidOptions[0], stupidOptions[1]]

  return (
    <>
      <div>
        {filteredGenres.map((genre, index) => (
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
      <Select
        isMulti
        name="cast"
        // value={defaultValues}
        value={defaultValues}
        options={selectOptions}
        onChange={(values, event) => {
          switch (event.action) {
            case "select-option":
              console.log('event:', event);
              props.handleCastClick(event.option.value);
            break;
            case "remove-value":
              props.handleCastClick(event.removedValue.value);
            break;
            case "clear":
              props.handleCastClear()
            break;
            default:
              console.log("ERROR: ", event);
            break;
          }
        }}
        // onChange={(values, action)=>{console.log("values:",values, "action:", action)}}
        // isOptionSelected={(o)=>props.castFilters.includes(o.value)}
      />
      {/* <div>
        {filteredCast.map((cast, index) => (
          <a
            title={`${props.castCountMap.get(cast.person_id) + 1} films`}
            key={cast.person_id}
            onClick={() => props.handleCastClick(cast.person_id)}
            className={`badge badge-pill filter-badge${
              props.castFilters.includes(cast.person_id)
                ? " badge-primary text-white"
                : " badge-secondary text-white"
            }`}
            style={{
              display: `${
                // index < 9 || !!props.castCountMap.get(cast.person_id)
                //   ? "inline-block"
                //   : "none"
                "inline-block"
              }`,
              // color: `${cast.character.includes('uncredited') ? "black" : "white"}`,
              fontSize: 10,
            }}
          >
            {cast.name}
          </a>
        ))}
      </div> */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Poster</th>
                {/* <th scope="col">Title</th> */}
                <th scope="col" className="d-none d-sm-table-cell">
                  Tagline
                </th>
                <th scope="col">Cast</th>
                <th scope="col">Year</th>
                {/* <th scope="col">Status</th> */}
                <th scope="col">Genres</th>
                <th scope="col" className="d-none d-sm-table-cell">
                  Type
                </th>
                {/* <th scope="col">Details</th> */}
                {/* <th scope="col">Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {props.videosToDisplay.map((video, index) => (
                <tr key={video.id}>
                  <td className="centered">
                    <span className="mb-2">{video.title}</span>
                    <br />
                    <Link
                      to={{
                        pathname: `/details/${video.id}`,
                      }}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w92${
                          video.poster_path ||
                          "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
                        }`}
                        alt="video poster"
                      />
                    </Link>
                  </td>
                  {/* <td>{video.original_title}</td> */}
                  <td className="d-none d-sm-table-cell">{video.tagline}</td>
                  <td>
                    <div
                      className="overflow-auto cast-cell"
                      style={{ /*width: 360,*/ height: 162 }}
                    >
                      {video.cast.map((cast, index) => (
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
                  </td>
                  {/* <td>{moment(video.release_date).format("MMMM Do, YYYY")}</td> */}
                  <td>{moment(video.release_date).format("YYYY")}</td>
                  {/* <td>
                  {video.is_lent ? "Lent" : video.is_borrowed ? "Borrowed" : ""}
                </td> */}
                  <td>
                    {video.genres.map((genre, index) => (
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
                  </td>
                  <td className="d-none d-sm-table-cell">
                    {video.video_type === "Blu-ray" ? (
                      <GiCompactDisc
                        style={{
                          fontSize: "30px",
                          color: "#054281",
                          backgroundImage:
                            "-webkit-linear-gradient(#054281, #0f77ad)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      />
                    ) : video.video_type === "DVD" ? (
                      <FcDvdLogo style={{ fontSize: "41px" }} />
                    ) : (
                      <AiOutlineCloudDownload style={{ fontSize: "34px" }} />
                    )}
                  </td>
                  {/* <td>
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
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default VideosTable;
