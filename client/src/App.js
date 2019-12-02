import React, {useState, useEffect} from "react";
import './App.css';
import { Route, Redirect} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EditSpend from "./components/EditSpend";
import CreateBudget from "./components/CreateBudget"
import BudgetDetails from "./components/BudgetDetails"

const App = props => {

  const [user, setUser]= useState(null)

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}{...props}/>
      <Route
          exact
          path="/"
          render={props => <Home user={user} setUser={setUser}{...props}/>}
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
        <Route
          exact
          path="/create-budget"
          render={props => <CreateBudget {...props}/>}
        />
        <Route
          path="/budget/:id"
          render={props => <BudgetDetails {...props}/>}
        />
        <Route
          path="/spend/:id"
          render={props => <EditSpend budgetId={props.budgetId}{...props}/>}
        />
    </div>
  );
}

export default App;
