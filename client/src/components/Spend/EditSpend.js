import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";
import { styles } from "../../styles/GlobalMUIStyles";
import axios from "axios";
import moment from "moment";

const EditSpend = props => {
  const { classes } = props;
  const [spendData, setSpendData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [spendName, setSpendName] = useState("");
  const [spendDate, setSpendDate] = useState(new Date());
  const [spendAmount, setSpendAmount] = useState(0);
  const [spendCategory, setSpendCategory] = useState("");
  const [budgetId, setBudgetId] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/spend/${props.match.params.id}`)
      .then(response => {
        setSpendData(response.data);
        setSpendAmount(response.data.amount);
        setSpendName(response.data.name);
        setSpendDate(response.data.date);
        setSpendCategory(response.data.category);
        setBudgetId(response.data.budget);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "spendName") setSpendName(value);
    if (name === "spendAmount") setSpendAmount(value);
    if (name === "spendDate") setSpendDate(value);
  };

  const deleteSpend = e => {
    e.preventDefault();
    axios
      .delete(`/api/spend/${props.match.params.id}`)
      .then(() => {
        console.log("deleted one spend from database");
        props.history.push(`/budget/${budgetId}`);
      })
      .catch(err => {
        console.error(err);
      });
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
    axios
      .put(`/api/spend/${props.match.params.id}`, {
        name: spendName,
        amount: spendAmount,
        date: spendDate,
        category: spendCategory
      })
      .then(response => {
        props.history.push(`/budget/${spendData.budget}`);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="create-spend narrow-wrapper">
      <h2>Edit Spend </h2>
      {loading && <p>Loading...</p>}
      {spendData && (
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="spendName">Name:</InputLabel>
              <Input
                name="spendName"
                type="text"
                defaultValue={spendData.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="spendAmount">Amount:</InputLabel>
              <Input
                name="spendAmount"
                defaultValue={spendData.amount}
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
                defaultValue={moment(spendData.date).format("YYYY-MM-DD")}
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
              Save Changes
            </Button>
            <Button className={classes.buttonRedGrad} onClick={deleteSpend}>Delete Spend</Button>
            <Link to={`/budget/${spendData.budget}`} className="black-link">
              Cancel
            </Link>
          </FormGroup>
        </form>
      )}
    </div>
  );
};

export default withStyles(styles)(EditSpend);
