import React from 'react';
import './App.css';
import { Route, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

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
          render={props => <Home/>}
        />
        <Route
          exact
          path="/auth/login"
          render={props => <Home/>}
        />
    </div>
  );
}

export default App;
