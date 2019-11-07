import React, {useState, useEffect} from "react";
import './App.css';
import { Route, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

/*
setUser = user => {
  setSessionUser(user)
};
*/

const App = props => {

  const [user, setUser]= useState("")

  return (
    <div className="App">
      <Navbar user={user}/>
      <Route
          exact
          path="/"
          render={props => <Home user={user}/>}
        />
        <Route
          exact
          path="/auth/signup"
          render={props => <Signup setUser={setUser}{...props}/>}
        />
        <Route
          exact
          path="/auth/login"
          render={props => <Login setUser={setUser}{...props}/>}
        />
    </div>
  );
}

export default App;
