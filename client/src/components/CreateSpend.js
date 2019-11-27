import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";
import { styles } from "../styles/GlobalMUIStyles";
import axios from "axios";

const CreateSpend = props => {
  const { classes } = props;
  const [spendName, setSpendName] = useState("");
  const [spendDate, setSpendDate] = useState(new Date());
  const [spendAmount, setSpendAmount] = useState(0);
  const [spendCategory, setSpendCategory] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "spendName") setSpendName(value);
    if (name === "spendAmount") setSpendAmount(value);
    if (name === "spendDate") setSpendDate(value);
    console.log(name,value)
  };

  const selectCategory = e => {
    const buttons = Array.from(
      document.getElementsByClassName("category-option")
    );
    buttons.forEach(el => el.classList.remove("option-selected"));
    e.target.classList.toggle("option-selected");
    setSpendCategory(e.target.innerText);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.setCreateSpend(false);
    axios
      .post("/api/spend", {
        name: spendName,
        amount: spendAmount,
        date: spendDate,
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
    <div className="create-spend">
      <h2>Create New Spend</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="spendName">Name:</InputLabel>
            <Input name="spendName" type="text" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="spendAmount">Amount:</InputLabel>
            <Input
              name="spendAmount"
              min="0"
              step="0.01"
              type="number"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <TextField
              name="spendDate"
              label="Date:"
              type="date"
              className={classes.textField}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
          </FormControl>
          <div className="category-options-container">
            <div className="category-option" onClick={selectCategory}>
              Food
            </div>
            <div className="category-option" onClick={selectCategory}>
              Accomodation
            </div>
            <div className="category-option" onClick={selectCategory}>
              Transport
            </div>
            <div className="category-option" onClick={selectCategory}>
              Clothes
            </div>
            <div className="category-option" onClick={selectCategory}>
              Culture
            </div>
            <div className="category-option" onClick={selectCategory}>
              Leisure
            </div>
            <div className="category-option" onClick={selectCategory}>
              Drinks
            </div>
          </div>
          <Button className={classes.buttonBlueGrad} type="submit">
            Create
          </Button>
          <p onClick={() => props.setCreateSpend(false)} className="black-link">
            Cancel
          </p>
        </FormGroup>
      </form>
    </div>
  );
};

export default withStyles(styles)(CreateSpend);
