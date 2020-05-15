import React from 'react';
import ProfileForm from '../Form/ProfileForm';

import BackgroundProfile from '../../../img/background-profile.png';
import UserImage from '../../../img/user-image.jpeg';

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
                        <div className="card card-body">
                            <img src={UserImage} className="card-img-top" alt="user avatar" style={centerBlockAvatar} />

                            <ProfileForm />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;