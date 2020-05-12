import React, { Component } from 'react';
import NavBar2 from '../components/Shared/NavBar/NavBar2';

class Borrow extends Component {
    render() {
        return (
            <div>
                <NavBar2 />
                <div class="row">
              <div class="col-sm-1"></div>
                <div class="col-sm-10">
                <div className="card">
                    <div className = "card-body">
                        <h2 className="card-title">Borrow a Video from Someone</h2>
                    </div>

                    <div>
                        <form>
                            <div className="form-group px-5">
                              <label for="exampleFormControlInput1">Movie Title</label>
                              <input type="title" className="form-control" id="exampleFormControlInput1" placeholder="Frozen">
                            </input>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Borrowee's Name</label>
                              <input type="borrower" className="form-control" id="exampleFormControlInput2" placeholder="John Smith">
                            </input>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Borrow Date</label>
                              <input type="borrow-date" className="form-control" id="exampleFormControlInput3" placeholder="mm/dd/yyyy">
                              </input>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Return Date</label>
                              <input type="return-date" className="form-control" id="exampleFormControlInput4" placeholder="mm/dd/yyyy">
                              </input>
                            </div>
                            <button type="submit" className="btn btn-primary">Borrow Video</button>
                          </div>
                    
                  </div>
                </form>
                </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Borrow;