import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { GiSaveArrow } from 'react-icons/gi';

const ProfileForm = (props) => {

    return (
        <form>
            <div className="form-group">
                <label htmlFor='username'>Username: </label>
                <input type="text" name="username" className="form-control" placeholder='Sara Buckingham'>
                </input>
                
            </div>
            <div className="form-group">
                <label htmlFor='bio'>Biography: </label> 
                <input type="text" name='bio' className="form-control" placeholder='Aristocrat, actress and billionaire.'>
                </input>
            </div>
            <div className="form-group">
                <label htmlFor='email'>Email</label> 
                <input type="email" name='email' className="form-control" placeholder='sara@example.com'>
                </input>
            </div>
            <div className="form-group">
                <label htmlFor='password'>Password</label> 
                <input type="text" name='password' className="form-control" placeholder='********'>
                </input>
            </div>
            <div className="form-group">
                <label htmlFor='confirmpassword'>Confirm Password</label>
                <input type="text" name="confirmpassword" className="form-control" placeholder='********'>
                </input>
            </div>
            
            <button type="submit" className="btn btn-primary">Save Profile <GiSaveArrow /></button>
           
            <button href="/edit" className="btn btn-primary" style={{float: 'right'}}>Edit Profile <FiEdit2 /></button>
        </form>

    );
};

export default ProfileForm;