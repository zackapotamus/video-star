import React, { Component } from 'react';
// import NavBarLogin from '../components/Shared/NavBar/NavBarLogin';
import NavBar2 from '../components/Shared/NavBar/NavBar2';

class Login extends Component {
    render() {
        return (
            <>
                <NavBar2 />
                <div class="row">
              <div class="col-sm-1"></div>
                <div class="col-sm-10">
                <div className="card">
                    <div className = "card-body">
                        <h2 className="card-title">Log In to Your Account</h2>
                    </div>

                    <div>
                        <form>
                            <div className="form-group px-5">
                              <label for="exampleFormControlInput1">Email</label>
                              <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="example@gmail.com">
                            </input>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Password</label>
                              <input type="password" className="form-control" id="exampleFormControlInput3">
                              </input>
                            </div>

                            <button type="submit" className="btn btn-primary mr-3">Submit</button>
                            <button type="submit" className="btn btn-primary">Test</button>
                          </div>
                    
                </form>
                </div>
                </div>
                </div>
                </div>
            </>
        );
    }
}

export default Login;