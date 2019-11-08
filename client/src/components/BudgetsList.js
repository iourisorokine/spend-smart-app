import React, { useState, useEffect } from "react";
import axios from "axios";

const BudgetsList = props => {
  const [budgetsData, setBugdetsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBudgetsData = () => {
    axios
      .get("/api/budget")
      .then(budgets => {
        console.log(budgets);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/budget")
      .then(budgets => {
        console.log(budgets.data);
        setLoading(false)
    }).catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>This is budgetsList</h2>
    </div>
  );
};

export default BudgetsList;
