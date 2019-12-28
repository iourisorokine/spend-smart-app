import React from "react";
import './App.css';
import { Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EditSpend from "./components/EditSpend";
import CreateBudget from "./components/CreateBudget";
import BudgetDetails from "./components/BudgetDetails";
import EditBudget from './components/EditBudget';

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

render(){
  return (
    <div className="App">
      <Navbar user={this.state.user} setUser={this.setUser}/>
      <Route
          exact
          path="/"
          render={props => <Home user={this.state.user} setUser={this.setUser}{...props}/>}
        />
        <Route
          exact
          path="/auth/signup"
          render={props => <Signup setUser={this.setUser}{...props}/>}
        />
        <Route
          exact
          path="/auth/login"
          render={props => <Login setUser={this.setUser}{...props}/>}
        />
        <Route
          exact
          path="/create-budget"
          render={props => <CreateBudget {...props}/>}
        />
        <Route
          path="/budget/:id"
          render={props => <BudgetDetails user={this.state.user}{...props}/>}
        />
        <Route
          path="/budget/edit/:id"
          render={props => <EditBudget user={this.state.user}{...props}/>}
        />
        <Route
          path="/spend/:id"
          render={props => <EditSpend budgetId={props.budgetId}{...props}/>}
        />
    </div>
  );
}
}

export default App;
