import React from "react";
import BudgetsList from "../Budget/BudgetsList";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../../styles/GlobalMUIStyles";
import WelcomeScreen from "./WelcomeScreen";

const Home = props => {
  return (
    <div>
      {props.user ? <BudgetsList user={props.user} /> : <WelcomeScreen />}
    </div>
  );
};

export default withStyles(styles)(Home);
