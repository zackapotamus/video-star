import React from 'react';
import ProfileForm from '../Form/ProfileForm';

import BackgroundProfile from '../../../img/background-profile.png';
import UserImage from '../../../img/user-image.jpeg';

const Card = (props) => {

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

    // const formstyle = {
    //     display: 'block',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     position: 'relative',
    //     width: '40%',
    // }

    return (
        <>
            {/* <div className="card text-white">
                <img src={BackgroundProfile} className="card-img" alt="background grey block" style={centerBlockBackground} />
               
                <div className="card-img-overlay">
                    <img src={UserImage} className="card-img-top" alt="user avatar" style={centerBlockAvatar} />
                    <div className="row" style={formstyle}>
                        <div className="col">
                        <ProfileForm />
                        </div>
                    </div>
                </div>              
            </div> */}
            <div className="container-fluid bg-light py-3">
                <div className="row">
                    <div className="col-md-6 mx-auto" style={centerBlockBackground}>
                        <div className="card card-body">
                            <img src={UserImage} className="card-img-top" alt="user avatar" style={centerBlockAvatar} />

                            <ProfileForm />
                            {/* <fieldset>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" placeholder="Bio" name="bio" type="text"/>
                                </div>
                                <div className="form-group has-error">
                                    <input className="form-control input-lg" placeholder="E-mail Address" name="email" type="text"/>
                                </div>
                                <div className="form-group has-success">
                                    <input className="form-control input-lg" placeholder="Password" name="password" value="" type="password" />
                                </div>
                                <div className="form-group has-success">
                                    <input className="form-control input-lg" placeholder="Confirm Password" name="password" value="" type="password" />
                                </div>

                                <input className="btn btn-lg btn-primary btn-block" value="Save" type="submit"/>
                            </fieldset> */}

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Card;