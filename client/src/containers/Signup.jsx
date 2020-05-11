import React, { Component } from 'react';
import NavBarLogin from '../components/Shared/NavBar/NavBarLogin';

class Signup extends Component {
    render() {
        return (
            <>
                <NavBarLogin />
                <div class="row">
              <div class="col-sm-1"></div>
                <div class="col-sm-10">
                <div className="card">
                    <div className = "card-body">
                        <h2 className="card-title">Sign Up for a New Account</h2>
                    </div>

                    <div>
                        <form>
                            <div className="form-group px-5">
                              <label for="exampleFormControlInput1">Name</label>
                              <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="John Smith">
                            </input>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Email</label>
                              <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="example@gmail.com">
                            </input>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Password</label>
                              <input type="password" className="form-control" id="exampleFormControlInput3">
                              </input>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Confirm Password</label>
                              <input type="password" className="form-control" id="exampleFormControlInput4">
                              </input>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                          </div>
                    
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

export default Signup;