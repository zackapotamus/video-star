import React from 'react';

const MovieCard = (props) => {

    return (
        <>
            <div className='card'>
                <div className='card_left'>
                    <img src={props.poster_path} />
                </div>
                <div className='card_right'>
                    <h1>{props.title}</h1>
                        <div className='card_right__details'>
                            <ul>
                                <li>Release Date: {props.release_date}</li>
                                <li>Budget: {props.budget}</li>
                                <li>Runtime: {props.runtime}</li>
                                {/* <li>{props.genres.name}</li> */}
                            </ul>
                        </div>
                        <div class='card_right__review'>
                            <p>Synopsis: {props.overview}</p>
                            <a href={props.homepage} target='_blank'>Movie Homepage</a>
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