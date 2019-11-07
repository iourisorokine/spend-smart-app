import React from 'react';
import './App.css';
import { Route, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = props => {

  return (
    <div className="App">
      <Navbar/>
      <Route
          exact
          path="/"
          render={props => <Home/>}
        />
        <Route
          exact
          path="/auth/signup"
          render={props => <Signup/>}
        />
        <Route
          exact
          path="/auth/login"
          render={props => <Login/>}
        />
    </div>
  );
}

export default App;
