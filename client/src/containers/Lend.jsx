import React, { Component } from 'react';
import NavBar2 from '../components/Shared/NavBar/NavBar2';

class Lend extends Component {
    render() {
        return (
            <div>
                <NavBar2 />
                <div class="row">
              <div class="col-sm-1"></div>
                <div class="col-sm-10">
                <div className="card">
                    <div className = "card-body">
                        <h2 className="card-title">Lend a Video to Someone</h2>
                    </div>

                    <div>
                        <form>
                            <div className="form-group px-5">
                              <label for="exampleFormControlInput1">Movie Title</label>
                              <input type="title" className="form-control" id="exampleFormControlInput1" placeholder="Frozen">
                            </input>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Lendee's Name</label>
                              <input type="borrower" className="form-control" id="exampleFormControlInput2" placeholder="John Smith">
                            </input>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Lending Date</label>
                              <input type="borrow-date" className="form-control" id="exampleFormControlInput3" placeholder="mm/dd/yyyy">
                              </input>
                            </div>
                            <div className="form-group">
                              <label for="exampleFormControlInput1">Return Date</label>
                              <input type="return-date" className="form-control" id="exampleFormControlInput4" placeholder="mm/dd/yyyy">
                              </input>
                            </div>
                            <button type="submit" className="btn btn-primary">Lend Video</button>
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

export default Lend;