import React from 'react';

const LoginForm = ({ handleChange, handleSubmit, emailValue, passwordValue}) => {
    return (
        <div className="container" style={{marginTop: 20}}>
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="form-control" placeholder="example@gmail.com" onChange={handleChange} value={emailValue}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control" onChange={handleChange} value={passwordValue}>
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary mr-3" style={{marginBottom: 15}} onClick={handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;