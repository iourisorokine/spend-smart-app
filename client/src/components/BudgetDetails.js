import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SpendLine from "./SpendLine";
import CreateSpend from "./CreateSpend";
import BudgetGraph from "./BudgetGraph";
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
  const [budgetView, setBudgetView] = useState("Details");

  const mapSpendLines = budgetData => {
    return budgetData.spends.map(spend => {
      return <SpendLine data={spend} budgetId={props.match.params.id}/>;
    });
  };

  const toggleBudgetView = e => {
    document
      .getElementsByClassName("btn-budget-lines")[0]
      .classList.remove("option-selected");
    document
      .getElementsByClassName("btn-budget-graph")[0]
      .classList.remove("option-selected");
    e.target.classList.add("option-selected");
    setBudgetView(e.target.innerHTML);
  };

  const getSpendTotal = budgetData => {
    const total = budgetData.spends.reduce((acc, val) => acc + val.amount, 0);
    return (
      <div className="spend-line" key="total">
        <div className="spend-title">
          <h3>Total:</h3>
        </div>
        <div className="spend-total">
          <h3>{total} EUR</h3>
        </div>
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
    <div className="narrow-wrapper">
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
              <div className="flex-row">
                <h2>{budgetData && budgetData.name} - detail</h2>
                <div className="flex-row btn-budget-container">
                  <div
                    className="btn-budget-lines option-selected"
                    onClick={toggleBudgetView}>
                    Details
                  </div>
                  <div className="btn-budget-graph" onClick={toggleBudgetView}>
                    Graph
                  </div>
                </div>
              </div>
            </>
          )}
          {budgetData && budgetView === "Details" && (
            <div>
              <Button
                className={classes.buttonRoundAdd}
                onClick={() => setCreateSpend(!createSpend)}>
                +
              </Button>
              {spendLines}
              {spendTotal}
            </div>
          )}
          {budgetData && budgetView === "Graph" && <BudgetGraph data={budgetData}/>}
        </>
      )}
    </div>
  );
};

export default withStyles(styles)(BudgetDetails);
