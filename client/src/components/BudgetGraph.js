import React, {useState} from "react";
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

  const [selectedMonth, setSelectedMonth] = useState(null)
    
  const categories=["Food", "Accomodation", "Drinks", "Leisure", "Clothes", "Culture", "Transport"];  
  const amountsPerCat = getAmountsPerCat(categories, props.data.spends)
  const totalSpend = props.data.spends.reduce((acc, val) => acc + val.amount, 0)
  const graphData = {
    datasets: [{
        data: amountsPerCat,
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e803b9","#c45800"],
    }],
    labels: categories,
};

  return (
    <div>
      <h4>Your budget by categories:</h4>
      <Doughnut data={graphData} width={300} height={150}></Doughnut>
      <p>Total Spend: {totalSpend} EUR</p>
    </div>
  );
};

export default BudgetGraph;
