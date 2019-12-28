import React, { useState, useEffect } from "react";
import SpendLine from "./SpendLine";
import CreateSpend from "./CreateSpend";
import BudgetGraph from "./BudgetGraph";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/GlobalMUIStyles";
import BudgetTopMenu from "./BudgetTopMenu";
import EditBudget from "./EditBudget";
import { CircleSpinner } from "react-spinners-kit";

const BudgetDetails = props => {
  const { classes } = props;
  const [budgetData, setBudgetData] = useState(null);
  const [spendLines, setSpendLines] = useState(null);
  const [spendTotal, setSpendTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createSpend, setCreateSpend] = useState(false);
  const [editBudget, setEditBudget] = useState(false);
  const [budgetView, setBudgetView] = useState("Details");

  const mapSpendLines = budgetData => {
    const budgetDataReversed = budgetData.spends.reverse();
    return budgetDataReversed.map(spend => {
      return <SpendLine data={spend} budgetId={props.match.params.id} />;
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
        <div className="total-amount">
          <h3>€{total.toFixed(2)}</h3>
        </div>
      </div>
    );
  };

  // getting the data only
  const getBudgetData = () => {
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
  };

  //getting the data on component did mount
  useEffect(() => {
    if (props.user) {
      getBudgetData();
    }
  }, []);

  return (
    <>
      <div>
        <div className="spinner-container">
          <CircleSpinner size={30} color="#686769" loading={loading} />
        </div>
        <div className="narrow-wrapper pad-bottom-100">
          {createSpend && (
            <CreateSpend
              user={props.user}
              budget={budgetData}
              setCreateSpend={setCreateSpend}
              getBudgetData={getBudgetData}
            />
          )}
          {editBudget && (
            <EditBudget
              data={budgetData}
              setEditBudget={setEditBudget}
              getBudgetData={getBudgetData}
            />
          )}
          {budgetData && (
            <BudgetTopMenu
              budgetData={budgetData}
              toggleBudgetView={toggleBudgetView}
              createSpend={createSpend}
              setCreateSpend={setCreateSpend}
              setEditBudget={setEditBudget}
            />
          )}
          {budgetData && budgetView === "Details" && <>{spendLines}</>}
          {budgetData && budgetView === "Graph" && (
            <BudgetGraph data={budgetData} />
          )}
        </div>
        <div className="spend-total">
          <div className="narrow-wrapper">{spendTotal}</div>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(BudgetDetails);
