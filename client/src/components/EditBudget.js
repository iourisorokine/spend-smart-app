import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button
} from "@material-ui/core";
import {styles} from "../styles/GlobalMUIStyles"
import axios from "axios";

const EditBudget = props => {
    const { classes } = props;
    const [budgetName, setBudgetName] = useState(props.data.name);
    const [budgetDescription, setBudgetDescription] = useState(props.data.description);
  
    const handleChange = e => {
      const { name, value } = e.target;
      if (name === "budgetName") setBudgetName(value);
      if (name === "budgetDescription") setBudgetDescription(value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      axios
        .put(`/api/budget/${props.data._id}`, { name: budgetName, description: budgetDescription })
        .then(() => {
          props.setEditBudget(false)
          props.getBudgetData()
        })
        .catch(err => {
          console.error(err);
        });
    };

    const handleDelete = e =>{
      axios.delete(`/api/budget/${props.data._id}`)
      .then(()=>{
        return(<Redirect to={"/"}/>)
      }).catch(err => {
        console.error(err);
      });
    }
  
    return (
      <div className="narrow-wrapper edit-budget">
        <h2>Edit {props.data.budgetName}</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="name">Name:</InputLabel>
              <Input name="budgetName" defaultValue={props.data.name} type="text" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="budgetDescription">Description:</InputLabel>
              <Input name="budgetDescription" defaultValue={props.data.description} type="text" onChange={handleChange} />
            </FormControl>
              <Button className={classes.buttonBlueGrad} type="submit">
                Save changes
              </Button>
              <Button className={classes.buttonRedGrad} onClick={handleDelete}>
                Delete the Budget
              </Button>
          </FormGroup>
        </form>
        <Link className="black-link" onClick={()=>props.setEditBudget(false)}>
          Back
        </Link>
      </div>
    );
  };

export default withStyles(styles)(EditBudget)
