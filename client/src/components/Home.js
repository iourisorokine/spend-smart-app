import React from "react";
import BudgetsList from "./BudgetsList";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/GlobalMUIStyles";
import Login from "./Login";

const Home = props => {
  const { classes } = props;
  return (
    <div>
      {props.user ? (
        <>
          <p>Hi, {props.user.username}!</p>
          <BudgetsList />
        </>
      ) : (
        <>
          <p>Please login to see your budgets</p>
        </>
      )}
    </div>
  );
};

export default withStyles(styles)(Home);
