import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CreateSpend from "./CreateSpend";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/GlobalMUIStyles";

const BudgetDetails = props => {
  const { classes } = props;
  const [budgetData, setBudgetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createSpend, setCreateSpend] = useState(false);

  // getting the data only
  const getBudgetData = () => {
    axios
      .get(`/api/budget/${props.match.params.id}`)
      .then(response => {
        setBudgetData(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //getting the data on component did mount
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/budget/${props.match.params.id}`)
      .then(response => {
        setBudgetData(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {createSpend ? (
            <>
              <CreateSpend
                budget={budgetData}
                setCreateSpend={setCreateSpend}
                getBudgetData={getBudgetData}
              />
              <button onClick={() => setCreateSpend(!createSpend)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <h2>{budgetData && budgetData.name} - detail</h2>
              <Button
                className={classes.buttonRoundAdd}
                onClick={() => setCreateSpend(!createSpend)}>
                +
              </Button>
            </>
          )}
          {budgetData &&
            budgetData.spends.map(spend => (
              <p key={spend._id}>
                {spend.name} - {spend.category} - {spend.amount}
              </p>
            ))}
          {budgetData && (
            <h3>
              Total:{" "}
              {budgetData.spends.reduce((acc, val) => acc + val.amount, 0)}
            </h3>
          )}
        </>
      )}
    </>
  );
};

export default withStyles(styles)(BudgetDetails);
