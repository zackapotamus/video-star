import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import API from '../../../utils/API';

const MovieCard = (props) => {

    const [video, setVideo] = useState({});

    const {id} = useParams();

    useEffect( async () => {
        let token = localStorage.getItem("jwt");
        let result = await API.getVideo(id, token);
        setVideo(result.data)
    }, [])

    return (
        <>
            <div className='card'>
                <div className='card_left'>
                    <img src={video.poster_path} alt="movie poster"/>
                </div>
                <div className='card_right'>
                    <h1>{video.title}</h1>
                        <div className='card_right__details'>
                            <ul>
                                <li>Release Date: {video.release_date}</li>
                                <li>Budget: {video.budget}</li>
                                <li>Runtime: {video.runtime}</li>
                                {/* <li>{props.genres.name}</li> */}
                            </ul>
                        </div>
                        <div className='card_right__review'>
                            <p>Synopsis: {video.overview}</p>
                            <a href={video.homepage} rel="noopener noreferrer" target='_blank'>Movie Homepage</a>
                        </div>
                        {/* <div class='card_right__button'>
                            <a href='https://www.youtube.com/watch?v=ot6C1ZKyiME' target='_blank'>WATCH TRAILER</a>
                        </div> */}
                </div>
            </div>                                                                               
        </>
    );
};

export default MovieCard;