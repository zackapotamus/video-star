import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './assets/img/videostar-logo-master.svg';
import "./App.css";
import axios from "axios";

import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import MyLibrary from "./containers/MyLibrary";
import LentBorrow from "./containers/LentBorrow";
import Lend from "./containers/Lend";
import Borrow from "./containers/Borrow";
import Details from "./containers/Details";
import Contact from "./containers/Contact";
import Add from "./containers/Add";

import Footer from "./components/Shared/Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/api/user_data").then((response) => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
        });
      }
    });
  }
  render() {
    return (
      <Router>
        <Route exact path="/" component={Signup} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/login" render={() => <Login updateUser={this.updateUser} />}/>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/mylibrary" component={MyLibrary} />
        <Route exact path="/lentborrow" component={LentBorrow} />
        <Route exact path="/lend" component={Lend} />
        <Route exact path="/borrow" component={Borrow} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/add" component={Add} />

        <Footer />
      </Router>
    );
  }
}

export default App;
