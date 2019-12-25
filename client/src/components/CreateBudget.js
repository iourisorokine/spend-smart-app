import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button
} from "@material-ui/core";
import { styles } from "../styles/GlobalMUIStyles";
import AddBudgetParticipants from "./AddBudgetParticipants";
import axios from "axios";

const CreateBudget = props => {
  const { classes } = props;
  const [budgetName, setBudgetName] = useState("");
  const [addParticipants, setAddParticipants] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [budgetDescription, setBudgetDescription] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "budgetName") setBudgetName(value);
    if (name === "budgetDescription") setBudgetDescription(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/budget", { name: budgetName, description: budgetDescription, participants })
      .then(() => {
        props.history.push("/");
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
            <Input
              name="budgetDescription"
              type="text"
              onChange={handleChange}
            />
          </FormControl>
          {addParticipants ? (
            <AddBudgetParticipants
              setAddParticipants={setAddParticipants}
              participants={participants}
              setParticipants={setParticipants}
            />
          ) : (
            <Button
              className={classes.buttonBlueGrad}
              onClick={() => setAddParticipants(true)}>
              Add Participants
            </Button>
          )}

          <Button className={classes.buttonBlueGrad} type="submit">
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
