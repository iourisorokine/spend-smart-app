import React from 'react';
import {Link} from 'react-router-dom';

const BudgetTopMenu = props => {
    return (
        <>
          <h2>{props.budgetData.name} - detail</h2>
          <div className="flex-row">
            <div className="flex-row btn-budget-container">
              <div
                className="btn-budget-lines option-selected"
                onClick={props.toggleBudgetView}>
                Details
              </div>
              <div className="btn-budget-graph" onClick={props.toggleBudgetView}>
                Graph
              </div>
              <div className="btn-budget-edit" onClick={() => props.setEditBudget(true)}>
                Edit
              </div>
              <div
                className="btn-add-spend"
                onClick={() => props.setCreateSpend(!props.createSpend)}>
                + Spend
              </div>
            </div>
          </div>
        </>
    )
}

export default BudgetTopMenu
