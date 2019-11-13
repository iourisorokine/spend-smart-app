import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  FormGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Input,
  Button,
  Select
} from "@material-ui/core";
import { styles } from "../styles/GlobalMUIStyles";
import axios from "axios";

const CreateSpend = props => {
  const { classes } = props;
  const [spendName, setSpendName] = useState("");
  const [spendAmount, setSpendAmount] = useState(0);
  const [spendCategory, setSpendCategory] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "spendName") setSpendName(value);
    if (name === "spendAmount") setSpendAmount(value);
    if (name === "spendCategory") setSpendCategory(value);
    console.log(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.setCreateSpend(false);
    axios
      .post("/api/spend", {
        name: spendName,
        amount: spendAmount,
        category: spendCategory,
        budgetId: props.budget._id
      })
      .then(response => {
        props.getBudgetData();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="narrow-wrapper">
      <h2>Create New Spend</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="spendName">Name:</InputLabel>
            <Input name="spendName" type="text" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="spendAmount">Amount:</InputLabel>
            <Input name="spendAmount" min="0" step="0.01" type="number" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="spendCategory">Category:</InputLabel>
            <Select
              labelId="spendCategory"
              name="spendCategory"
              value={spendCategory}
              onChange={handleChange}>
              <MenuItem value={"Food"}>Food</MenuItem>
              <MenuItem value={"Accomodation"}>Accomodation</MenuItem>
              <MenuItem value={"Transport"}>Transport</MenuItem>
              <MenuItem value={"Clothes"}>Clothes</MenuItem>
              <MenuItem value={"Culture"}>Culture</MenuItem>
              <MenuItem value={"Leisure"}>Leisure</MenuItem>
              <MenuItem value={"Drinks"}>Drinks</MenuItem>
            </Select>
          </FormControl>
          <Button className={classes.buttonBlueGrad} type="submit">
            Create
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default withStyles(styles)(CreateSpend);
