import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CreateSpend from "./CreateSpend";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/GlobalMUIStyles";

const BudgetDetails = props => {
  const { classes } = props;
  const [budgetData, setBudgetData] = useState(null);
  const [spendLines, setSpendLines] = useState(null);
  const [spendTotal, setSpendTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createSpend, setCreateSpend] = useState(false);

  const mapSpendLines = budgetData => {
    return budgetData.spends.map(el => {
      return (
        <div key={el._id} className="spend-line narrow-wrapper">
          <div className="spend-title">{el.name}</div>
          <div className="spend-cat">{el.category}</div>
          <div className="spend-amount">{el.amount} EUR</div>
        </div>
      );
    });
  };

  const getSpendTotal = budgetData => {
      const total=budgetData.spends.reduce((acc,val)=>acc+val.amount,0)
      return (
        <div className="spend-line narrow-wrapper" key="total">
          <div className="spend-title"><h3>Total:</h3></div>
          <div className="spend-total"><h3>{total} EUR</h3></div>
        </div>
      );
  };

  // getting the data only
  const getBudgetData = () => {
    axios
      .get(`/api/budget/${props.match.params.id}`)
      .then(response => {
        setBudgetData(response.data);
        setSpendLines(mapSpendLines(response.data));
        setSpendTotal(getSpendTotal(response.data));
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
        setSpendLines(mapSpendLines(response.data));
        setSpendTotal(getSpendTotal(response.data));
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
          {budgetData && (
            <>
              {spendLines}
              {spendTotal}
            </>
          )}
        </>
      )}
    </>
  );
};

export default withStyles(styles)(BudgetDetails);
