import React from 'react';
import ProfileForm from '../Form/ProfileForm';

import BackgroundProfile from '../../../img/background-profile.png';
import UserImage from '../../../img/user-image.jpeg';
// import {FaUserCircle} from 'react-icons/fa';

const ProfileCard = (props) => {

    const centerBlockBackground = {
        backgroundImage: `${BackgroundProfile}`,
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
            <div className="container-fluid bg-light py-3">
                <div className="row">
                    <div className="col-md-6 mx-auto" style={centerBlockBackground}>
                        <div className="card card-body shadow">
                            <img src={UserImage} className="card-img-top" alt="user avatar" style={centerBlockAvatar} />

                            <ProfileForm editing={props.editing} handleEditClick={props.handleEditClick} emailValue={props.emailValue} nameValue={props.nameValue} bioValue={props.bioValue} handleFormSubmit={props.handleFormSubmit} handleChange={props.handleChange} savedState={props.savedState}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;