import React from "react";
import { Link } from "react-router-dom";

const BudgetLine = props => {
  const linkAddress = `/budget/${props.budget._id}`;
  return (
    <Link to={linkAddress}>
      <div className="item-line">
        <h4>{props.budget.name}</h4>
        <p>{props.budget.description}</p>
      </div>
    </Link>
  );
};

export default BudgetLine;
