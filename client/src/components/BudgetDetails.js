import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CreateSpend from "./CreateSpend";
import { getThemeProps } from "@material-ui/styles";
import axios from "axios";

const BudgetDetails = props => {
  const [budgetData, setBudgetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createSpend, setCreateSpend] = useState(false);

  // getting the data only
  const getBudgetData = () => {
    axios
      .get(`/api/budget/${props.match.params.id}`)
      .then(response => {
        setBudgetData(response.data);
        console.log('Got budget data:', response.data)
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
        console.log("Budget Data:", response.data);
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
          <h2>{budgetData && budgetData.name} - detail</h2>
          <button onClick={() => setCreateSpend(!createSpend)}>{createSpend?(<>Cancel</>):(<>New Spend</>)}</button>
          {createSpend && <CreateSpend budget={budgetData} setCreateSpend={setCreateSpend} getBudgetData={getBudgetData}/>}
          {budgetData&&budgetData.spends.map(spend=><p key={spend._id}>{spend.name} - {spend.category} - {spend.amount}</p>)}
        </>
      )}
    </>
  );
};

export default BudgetDetails;
