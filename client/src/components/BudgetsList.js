import React, { useState, useEffect } from "react";
import axios from "axios";
import Budget from "./Budget";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/GlobalMUIStyles";


const BudgetsList = props => {
  const {classes} = props;
  const [budgetsData, setBudgetsData] = useState([]);
  const [loading, setLoading] = useState(false);

  // getting the data only, not used for now
  const getBudgetsData = () => {
    axios
      .get("/api/budget")
      .then(budgets => {
        console.log(budgets);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //getting the data on component mounted
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/budget/user/${props.user._id}`)
      .then(response => {
        setBudgetsData(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const budgetsToRender = budgetsData.map(el => {
    return <Budget key={el._id} budget={el} />;
  });

  return (
    <div className="narrow-wrapper">
      <Link to="/create-budget">
        <Button className={classes.buttonRoundAdd}>+</Button>
      </Link>
      {loading && <p>loading...</p>}
      {budgetsToRender}
    </div>
  );
};

export default withStyles(styles)(BudgetsList);
