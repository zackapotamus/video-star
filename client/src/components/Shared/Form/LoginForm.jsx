import React from 'react';

const LoginForm = (props) => {
    return (
        <div className="container" style={{marginTop: 20}}>
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" placeholder="example@gmail.com" handleChange={props.handleChange}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" handleChange={props.handleChange}>
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary mr-3" style={{marginBottom: 15}} onClick={props.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default LoginForm;