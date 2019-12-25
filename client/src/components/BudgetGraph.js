import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Select, InputLabel, MenuItem } from "@material-ui/core";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const getAmountsPerCat = (cats, data) => {
  const amountsPerCat = cats.map(cat => {
    return data.reduce((acc, val) => {
      if (val.category === cat) return acc + val.amount;
      return acc;
    }, 0);
  });
  return amountsPerCat;
};

const filterDataByMonth = (data, month) => {
  const filtered = data.filter(
    spend => new Date(spend.date).getMonth() === month
  );
  return filtered;
};

const BudgetGraph = props => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  let monthStr = months[selectedMonth];
  const categories = [
    "Food",
    "Accomodation",
    "Drinks",
    "Leisure",
    "Clothes",
    "Culture",
    "Transport"
  ];

  let spendDataForSelectedMonth = filterDataByMonth(
    props.data.spends,
    selectedMonth
  );
  const amountsPerCat = getAmountsPerCat(categories, spendDataForSelectedMonth);
  const totalSpend = spendDataForSelectedMonth.reduce(
    (acc, val) => acc + val.amount,
    0
  );

  const graphData = {
    datasets: [
      {
        data: amountsPerCat,
        // extra colors for user generated categories
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
          "#e803b9",
          "#c45800",
          "#c45850",
          "#e803b9",
          "#c45800"
        ]
      }
    ],
    labels: categories
  };

  // automation of months display

  const getMonthsToSelect = () => {
    const spendMonthsArr = props.data.spends.map(spend =>
      new Date(spend.date).getMonth()
    );
    const monthsToSelect = [];
    months.forEach(month => {
      if (spendMonthsArr.includes(months.indexOf(month))) {
        monthsToSelect.push(
          <MenuItem value={months.indexOf(month)}>{month}</MenuItem>
        );
      }
    });
    return monthsToSelect;
  };
  const monthsToRender = getMonthsToSelect();

  return (
    <div>
      <div className="flex-row">
        <InputLabel id="month">Select Month:</InputLabel>
        <Select
          labelId="month"
          name="month"
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}>
          {monthsToRender}
        </Select>
      </div>
      <h4>Your budget by categories:</h4>
      <Doughnut data={graphData} width={300} height={150}></Doughnut>
      <p>
        Total Spend for {monthStr}: {totalSpend} EUR
      </p>
    </div>
  );
};

export default BudgetGraph;
