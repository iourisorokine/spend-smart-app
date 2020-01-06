import React from "react";
import './App.css';
import { Route} from "react-router-dom";
import Navbar from "./components/Global/Navbar";
import Home from "./components/Global/Home";
import Login from "./components/Global/Login";
import Signup from "./components/Global/Signup";
import EditSpend from "./components/Spend/EditSpend";
import CreateBudget from "./components/Budget/CreateBudget";
import BudgetDetails from "./components/Budget/BudgetDetails";
import EditBudget from './components/Budget/EditBudget';

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
