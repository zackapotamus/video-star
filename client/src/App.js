import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './assets/img/videostar-logo-master.svg';
// import "./App.css";
import axios from "axios";
import jwt from "jsonwebtoken";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Profile from "./containers/Account";
import MyLibrary from "./containers/MyLibrary";
import LentBorrow from "./containers/LentBorrow";
import Lend from "./containers/Lend";
import Borrow from "./containers/Borrow";
import Details from "./containers/Details";
import Add from "./containers/Add";
import PrivateRoute from "./components/App/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userObject: {},
    };
    this.checkForToken = this.checkForToken.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated() {
    try {
      const tokenFromStorage = localStorage.getItem("jwt");
      if (!tokenFromStorage) {
        return false;
      } else {
        const decoded = jwt.verify(
          tokenFromStorage,
          process.env.REACT_APP_SESSION_SECRET
        );
        if (decoded && decoded.email && decoded.id) {
          return true;
        }
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  checkForToken() {
    try {
      let ret = false;
      const tokenFromStorage = localStorage.getItem("jwt");
      if (tokenFromStorage) {
        // this.setState({ isLoggedIn: true });
        const decoded = jwt.verify(
          tokenFromStorage,
          process.env.REACT_APP_SESSION_SECRET
        );
        if (decoded && decoded.email && decoded.id) {
          this.setState({ userObject: decoded, isLoggedIn: true });
          ret = true;
        } else {
          this.setState({ isLoggedIn: false, userObject: {} });
          localStorage.setItem("jwt", "");
          ret = false;
        }
      }
      return ret;
    } catch (err) {
      console.log(err);
      this.setState({ isLoggedIn: false, userObject: {} });
      localStorage.setItem("jwt", "");
      return false;
    }
  }

  componentDidMount() {
    // console.log("App.js did mount");
    this.checkForToken();
  }

  logOutUser() {
    this.setState({
      userObject: {},
      isLoggedIn: false,
    });
    localStorage.setItem("jwt", "");
  }

  // getUser() {
  //   axios.get("/api/user_data").then((response) => {
  //     console.log("Get user response: ");
  //     console.log(response.data);
  //     if (response.data.user) {
  //       console.log("Get User: There is a user saved in the server session: ");

  //       this.setState({
  //         isLoggedIn: true,
  //         email: response.data.user.email,
  //         name: response.data.user.name,
  //       });
  //     } else {
  //       console.log("Get user: no user");
  //       this.setState({
  //         isLoggedIn: false,
  //         email: null,
  //         name: null,
  //       });
  //     }
  //   });
  // }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Login
                {...props}
                isAuthenticated={this.isAuthenticated}
                checkForToken={this.checkForToken}
              />
            )}
          />
           <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup
                {...props}
                isAuthenticated={this.isAuthenticated}
                checkForToken={this.checkForToken}
              />
            )}
          />
          {/* <Route exact path="/signup" component={Signup} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                {...props}
                isAuthenticated={this.isAuthenticated}
                checkForToken={this.checkForToken}
              />
            )}
          />
          <PrivateRoute exact path="/account" component={Profile} />
          <PrivateRoute exact path="/library" component={MyLibrary} />
          <PrivateRoute exact path="/lentborrowed" component={LentBorrow} />
          <PrivateRoute exact path="/lend/:id" component={Lend} />
          <PrivateRoute exact path="/borrow" component={Borrow} />
          <PrivateRoute exact path="/details/:id" component={Details} />
          <PrivateRoute exact path="/add" component={Add} />
        </Switch>
        <Footer {...this.props} />
      </Router>
    );
  }
}

export default App;
