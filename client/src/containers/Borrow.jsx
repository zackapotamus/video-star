import React, { Component } from "react";
import Hero from '../components/Shared/Hero/Hero';
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";

import Blockbuster from "../img/blockbuster.jpg";

class Borrow extends Component {
  render() {
    return (
      <>
        <div>
          <Hero imageUrl={Blockbuster}/>
          <GreyBlockTop page="Borrow" />

          <div className="container" style={{ marginBottom: 100 }}>
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-10">
                <div className="card shadow">
                  <div className="card-body">
                    <h2 className="card-title text-center">Borrow a Video from Someone</h2>
                  </div>

                  <div>
                    <form>
                      <div className="form-group px-5">
                        <label for="exampleFormControlInput1">
                          Movie Title
                        </label>
                        <input
                          type="title"
                          className="form-control mb-3"
                          id="exampleFormControlInput1"
                          placeholder="Frozen"
                        ></input>
                        <div className="form-group">
                          <label for="exampleFormControlInput1">
                            Borrowee's Name
                          </label>
                          <input
                            type="borrower"
                            className="form-control mb-3"
                            id="exampleFormControlInput2"
                            placeholder="John Smith"
                          ></input>
                          <div className="form-group">
                            <label for="exampleFormControlInput1">
                              Borrow Date
                            </label>
                            <input
                              type="borrow-date"
                              className="form-control mb-3"
                              id="exampleFormControlInput3"
                              placeholder="mm/dd/yyyy"
                            ></input>
                          </div>
                          <div className="form-group">
                            <label for="exampleFormControlInput1">
                              Return Date
                            </label>
                            <input
                              type="return-date"
                              className="form-control mb-3"
                              id="exampleFormControlInput4"
                              placeholder="mm/dd/yyyy"
                            ></input>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Borrow Video
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GreyBlock />
      </>
    );
  }
}

export default Borrow;
