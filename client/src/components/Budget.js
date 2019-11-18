import React from "react";
import { Link } from "react-router-dom";

const Budget = props => {
  const linkAddress = `/budget/${props.budget._id}`;
  return (
    <Link to={linkAddress}>
      <div className="budget">
        <h4>{props.budget.name}</h4>
        <p>{props.budget.description}</p>
      </div>
    </Link>
  );
};

export default Budget;
