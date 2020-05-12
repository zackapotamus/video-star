import React from 'react';

const SignupForm = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="name" className="form-control" placeholder="John Smith">
                            </input>
                        </div>
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
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control">
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;