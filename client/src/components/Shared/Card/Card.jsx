import React from 'react';

import BackgroundProfile from '../../../img/background-profile.png';
import UserImage from '../../../img/user-image.jpeg';

const Card = (props) => {

    const centerBlockBackground = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            width: '60%'
    }

    const centerBlockAvatar = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200
    }

    return (
        <>
            <div className="card text-white">
                <img src={BackgroundProfile} className="card-img" alt="background grey block" style={centerBlockBackground}/>
                    <div className="card-img-overlay">
                        <img src={UserImage} className="card-img-top" alt="user avatar" style={centerBlockAvatar}/>
                        <div className="col text-center">
                        <h5 className="card-title">{props.username}</h5>
                        
                        <p className="card-text">Email: {props.email}</p>
                        <p className="card-text">Bio: {props.bio}</p>
                        </div>
                    </div>
            </div>
            
        </>
    );
};

export default Card;