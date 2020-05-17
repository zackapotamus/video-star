import React from "react";
import { Link } from 'react-router-dom';
import PlaceholderImage from "../../../img/videostar-placeholder.png";
import moment from "moment";

const MovieCard = (props) => {

    return (
        <>
            <div className='card shadow'>
                <div className='card_top_image'>
                    <img src={
                        props.video.poster_path
                          ? `https://image.tmdb.org/t/p/w92${props.video.poster_path}`
                          : PlaceholderImage
                      }
                      alt="video poster"
                      style={{width: 200, display: 'block', marginLeft: 'auto', marginRight: 'auto',}}
                      />
                      <hr/>
                </div>
                <div className='card_title'>
                    <h1 style={{textAlign: 'center'}}>{props.video.title}</h1>
                    <hr/>
                        <div className='card_video__details'>
                            <ul style={{listStyleType:'none'}}>
                            
                                <li><strong>Release Date:</strong> {moment(props.video.release_date).format("MMMM Do, YYYY")}</li>
                                <li><strong>Budget:</strong> {props.video.budget}</li>
                                <li><strong>Runtime:</strong> {props.video.runtime}</li>
                                {/* <li>{props.genres.name}</li> */}
                                
                            </ul>
                        </div>
                        <hr/>
                        <div className='card_video__synopsis' style={{marginLeft: 30, marginRight: 30}}>
                            <p><strong>Synopsis:</strong> {props.video.overview}</p>
                        </div>
                            <hr/>
                        <div className='card_video__homepage text-center'>
                            <a href={props.video.homepage} rel="noopener noreferrer" target="_blank"><button className="btn btn-sm btn-outline-success my-2 my-sm-0">Movie Homepage</button></a>
                        </div>
                        <hr/>
                        <div className='card_video__lend text-center'>
                        <Link
                            to={`/lend/${props.video.id}`}
                        ><button className="btn btn-sm btn-outline-success my-2 my-sm-0">Lend Video</button></Link>
                        </div>
                        <hr/>
                        {/* <div class='card_watch_trailer__button'>
                            <a href='https://www.youtube.com/watch?v=ot6C1ZKyiME' target='_blank'>WATCH TRAILER</a>
                        </div> */}
                </div>
            </div>                                                                               
        </>
    );
};

export default MovieCard;