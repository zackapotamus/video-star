import React, { Component, useParams } from "react";
import NavBar2 from "../components/Shared/NavBar/NavBar2";
import Hero from '../components/Shared/Hero/Hero';
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import API from "../utils/API";
import Cashier from "../img/Cash-min.jpg";
import moment from "moment";

class Lend extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      video: {},
      title: "",
      lend_borrow_name: "",
      lend_borrow_due_date: "",
      lend_borrow_date: "",
      id: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  async handleSubmit(event) {
    event.preventDefault();
    const { id, token, lend_borrow_name, lend_borrow_due_date, lend_borrow_date, video } = this.state;
    let result = await API.updateVideo(id, token, {
      lend_borrow_due_date,
      lend_borrow_date,
      id,
      lend_borrow_name,
      is_lent: true,
    });
    this.setState({ video: result.data.data });
  }

  async componentDidMount() {
    const token = localStorage.getItem("jwt");
    const id = this.props.match.params.id;
    const result = await API.getVideo(id, token);
    this.setState({ video: result.data, token, id, title: result.data.title });
  }

  handleChange(event) {
    const { name, value } = event.target;
    // if (name.indexOf("_date") > 0) {
      
    // }
    this.setState({ [name]: value });
  }
  render() {
    return (
      <>
        <div>
          <NavBar2 />
          <Hero imageUrl={Cashier}/>
          <GreyBlockTop page="Lend" />

          <div className="container" style={{ marginBottom: 100 }}>
            <div class="row">
              <div class="col-sm-1"></div>
              <div class="col-sm-10">
                <div className="card shadow">
                  <div className="card-body">
                    <h2 className="card-title text-center">Lend a Video to Someone</h2>
                  </div>

                  <div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group px-5">
                        <label for="exampleFormControlInput1">
                          Movie Title
                        </label>
                        <input
                        dissabled={true}
                        readOnly={true}
                          type="text"
                          name="title"
                          className="form-control mb-3"
                          id="exampleFormControlInput1"
                          placeholder="Frozen"
                          value={this.state.title}
                        ></input>
                        <div className="form-group">
                          <label for="exampleFormControlInput1">
                            Lendee's Name
                          </label>
                          <input
                            name="lend_borrow_name"
                            type="text"
                            className="form-control mb-3"
                            id="exampleFormControlInput2"
                            placeholder="John Smith"
                            value={this.state.lend_borrow_name || ""}
                            onChange={this.handleChange}
                          ></input>
                          <div className="form-group">
                            <label for="exampleFormControlInput1">
                              Lending Date
                            </label>
                            <input
                              name="lend_borrow_date"
                              type="text"
                              className="form-control mb-3"
                              id="exampleFormControlInput3"
                              placeholder="mm/dd/yyyy"
                              value={this.state.lend_borrow_date}
                              onChange={this.handleChange}
                            ></input>
                          </div>
                          <div className="form-group">
                            <label for="exampleFormControlInput1">
                              Return Date
                            </label>
                            <input
                              type="text"
                              name="lend_borrow_due_date"
                              className="form-control mb-3"
                              id="exampleFormControlInput4"
                              placeholder="mm/dd/yyyy"
                              value={this.state.lend_borrow_due_date}
                              onChange={this.handleChange}
                            ></input>
                          </div>
                          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                            Lend Video
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

export default Lend;
