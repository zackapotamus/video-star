import React, { Component } from 'react';
import NavBar2 from '../components/Shared/NavBar/NavBar2';


class Add extends Component {
    render() {
        return (
            <>
            <NavBar2 />
            <div class="row">
              <div class="col-sm-1"></div>
                <div class="col-sm-10">
                <div className="card">
                    <div className = "card-body">
                        <h2 className="card-title">Add a Video to your Library</h2>
                    </div>
                <form>
                            <div className="form-group px-5">
                              <label for="exampleFormControlInput1">Movie Title</label>
                              <input type="title" className="form-control" id="exampleFormControlInput1" placeholder="Search for a Movie">
                            </input>
                            
                  </div>
                </form>
            </div>
            </div>
            </div>
            </>
        );
    }
}

export default Add;