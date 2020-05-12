import React from 'react';

const LoginForm = () => {
    return (
        <div className="container" style={{marginTop: 20}}>
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="example@gmail.com">
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control">
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary mr-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default LoginForm;