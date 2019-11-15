import React, { useState, useEffect } from "react";
import axios from "axios";
import Budget from "./Budget";

const BudgetsList = props => {
  const [budgetsData, setBudgetsData] = useState([]);
  const [loading, setLoading] = useState(false);

  // getting the data only, not used for now
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

  //getting the data on component mounted
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/budget")
      .then(response => {
        console.log(response.data);
        setBudgetsData(response.data)
        setLoading(false)
    }).catch(err => {
        console.log(err);
      });
  }, []);

  const budgetsToRender=budgetsData.map(el=>{
      return <Budget key={el._id} budget={el}/>
  })

  return (
    <div>
      {loading&&(<p>loading...</p>)}
      {budgetsToRender}  
    </div>
  );
};

export default BudgetsList;
