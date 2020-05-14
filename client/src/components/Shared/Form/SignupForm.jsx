import React from 'react';

const SignupForm = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="name" name="name" className="form-control" placeholder="John Smith" onChange={props.handleChange} value={props.nameValue}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" placeholder="example@gmail.com" onChange={props.handleChange} value={props.emailValue}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" onChange={props.handleChange} value={props.passwordValue}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" name="confirm" className="form-control" onChange={props.handleChange} vallue={props.confirmValue}>
                            </input>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{marginBottom: 15}} onClick={props.handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;