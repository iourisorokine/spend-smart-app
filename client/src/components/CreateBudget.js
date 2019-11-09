import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button
} from "@material-ui/core";
import axios from "axios";

const styles = {
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "20px 0"
  }
};

const CreateBudget = props => {
  const { classes } = props;
  const [budgetName, setBudgetName] = useState("");
  const [budgetDescription, setBudgetDescription] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "budgetName") setBudgetName(value);
    if (name === "budgetDescription") setBudgetDescription(value);
    console.log(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/budget", { name: budgetName, description: budgetDescription })
      .then(response => {
        //add props.getData
        console.log("response from server:", response);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="narrow-wrapper">
      <h2>Create New Budget</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="name">Name:</InputLabel>
            <Input name="budgetName" type="text" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="budgetDescription">Description:</InputLabel>
            <Input name="budgetDescription" type="text" onChange={handleChange} />
          </FormControl>
            <Button className={classes.root} type="submit">
              Create Budget
            </Button>
        </FormGroup>
      </form>
      <Link className="black-link" to="/">
        Back
      </Link>
    </div>
  );
};

export default withStyles(styles)(CreateBudget);
