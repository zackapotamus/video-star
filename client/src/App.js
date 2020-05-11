import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './assets/img/videostar-logo-master.svg';
import './App.css';
import Signup from'./components/pages/Signup'; 
import Login from './components/pages/Login';
import NavBarLogin from './components/NavBar/NavBarLogin';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavBarLogin />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
