import React, { Component } from "react";
import NavBarNew from "../components/Shared/NavBar/NavBarNew";
import Hero from '../components/Shared/Hero/Hero';
import GreyBlockTop from "../components/Shared/GreyBlockTop/GreyBlockTop";
import GreyBlock from "../components/Shared/GreyBlock/GreyBlock";
import API from "../utils/API";
import Cashier from "../img/Cash-min.jpg";
import moment from "moment";
import DatePicker from "react-date-picker";

class Lend extends Component {
  constructor() {
    super();
    this.state = {
      video: {},
      title: "",
      lend_borrow_name: "",
      lend_borrow_due_date: new Date(),
      lend_borrow_date: new Date(),
      id: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReturnDateChange = this.handleReturnDateChange.bind(this);
    this.handleLendDateChange = this.handleLendDateChange.bind(this);
  }
  
  async handleSubmit(event) {
    event.preventDefault();
    const { id, lend_borrow_name, lend_borrow_due_date, lend_borrow_date } = this.state;
    await API.updateVideo(id, {
      lend_borrow_due_date,
      lend_borrow_date,
      id,
      lend_borrow_name,
      is_lent: true,
    });
    await this.props.history.push('/lentborrowed');
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const result = await API.getVideo(id);
    this.setState({ video: result.data, id, title: result.data.title });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLendDateChange(date) {
    this.setState({ lend_borrow_date: date });
  }

  handleReturnDateChange(date) {
    this.setState({ lend_borrow_due_date: date });
  }

  render() {
    return (
      <>
        <div>
          <NavBarNew />
          <Hero imageUrl={Cashier}/>
          <GreyBlockTop page="Lend" />

          <div className="container" style={{ marginBottom: 100 }}>
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-10">
                <div className="card shadow">
                  <div className="card-body">
                    <h2 className="card-title text-center">Lend a Video to Someone</h2>
                  </div>

                  <div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group px-5">
                        <label htmlFor="exampleFormControlInput1">
                          Movie Title
                        </label>
                        <input
                        // disabled={true}
                        readOnly={true}
                          type="text"
                          name="title"
                          className="form-control mb-3"
                          id="exampleFormControlInput1"
                          placeholder="Frozen"
                          value={this.state.title}
                        ></input>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlInput1">
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
                            <label htmlFor="exampleFormControlInput1">
                              Lending Date
                            </label>
                            <DatePicker value={this.state.lend_borrow_date} onChange={this.handleLendDateChange} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">
                              Return Date
                            </label>
                            {/* <input
                              type="text"
                              name="lend_borrow_due_date"
                              className="form-control mb-3"
                              id="exampleFormControlInput4"
                              placeholder="mm/dd/yyyy"
                              value={this.state.lend_borrow_due_date}
                              onChange={this.handleChange}
                            ></input> */}
                            <DatePicker value={this.state.lend_borrow_due_date} onChange={this.handleReturnDateChange} />
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
