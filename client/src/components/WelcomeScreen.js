import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/GlobalMUIStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const WelcomeScreen = props => {
  const { classes } = props;
  return (
    <div className="narrow-wrapper">
      <Typography variant="h1"  className="app-title">Spend Smart</Typography>
      <Typography variant="body">
        Welcome to Spend Smart, the app that helps you managing your budget.
        Please login or sign-up in order to continue.
      </Typography>
      <div className="btn-auth-container">
        <Button className={classes.buttonBlueGrad} style={{ width: "100%" }}>
          <Link to="/auth/login">Login</Link>
        </Button>
      </div>
      <div className="btn-auth-container">
        <Button className={classes.buttonBlueGrad} style={{ width: "100%" }}>
          <Link to="/auth/signup">Signup</Link>
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(WelcomeScreen);
