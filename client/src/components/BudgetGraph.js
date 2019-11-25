import React from "react";
import { Doughnut } from "react-chartjs-2";

const getAmountsPerCat= (cats, data) =>{
    const amountsPerCat = cats.map(cat=>{
        return data.reduce((acc,val)=>{
            if(val.category===cat) return acc + val.amount;
            return acc;
        },0)
    })
    return amountsPerCat;
}

const BudgetGraph = props => {
  const categories=["Food", "Accomodation", "Drinks", "Leisure", "Clothes", "Culture", "Transport"];  
  const amountsPerCat = getAmountsPerCat(categories, props.data.spends)
  const totalSpend = props.data.spends.reduce((acc, val) => acc + val.amount, 0)
  const graphData = {
    datasets: [{
        data: amountsPerCat
    }],
    labels: categories
};
  return (
    <div>
      <h4>Your budget by categories:</h4>
      <Doughnut data={graphData} width={300} height={150}></Doughnut>
      <p>Total Spend: {totalSpend}</p>
    </div>
  );
};

export default BudgetGraph;
