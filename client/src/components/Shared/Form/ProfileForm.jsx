import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { GiSaveArrow } from 'react-icons/gi';

const ProfileForm = (props) => {

    return (
        <form>
            <div className="form-group">
                <label>Username: </label>
                <input type="username" className="form-control" placeholder={props.username}>
                </input>
                
            </div>
            <div className="form-group">
                <label>Biography: </label> 
                <input type="text" className="form-control" placeholder={props.bio}>
                </input>
            </div>
            <div className="form-group">
                <label>Email</label> 
                <input type="email" className="form-control" placeholder={props.email}>
                </input>
            </div>
            <div className="form-group">
                <label>Password</label> 
                <input type="password" className="form-control">
                </input>
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control">
                </input>
            </div>
            
            <button type="submit" className="btn btn-primary">Save Profile <GiSaveArrow /></button>
           
            <button href="/edit" className="btn btn-primary" style={{float: 'right'}}>Edit Profile <FiEdit2 /></button>
        </form>

    );
};

export default ProfileForm;