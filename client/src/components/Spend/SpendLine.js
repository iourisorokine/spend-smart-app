import React from 'react';
import {Link} from 'react-router-dom';
import EditSpend from './EditSpend';

const SpendLine = props => {
    const editLink=`/spend/${props.data._id}`;
    return (
            <div className="spend-line item-line">
              <div className="spend-title">{props.data.name}</div>
              <div className="spend-cat">{props.data.category&&props.data.category.slice(0,4)}{'.'}</div>
              <div className="spend-amount">€{props.data.amount.toFixed(2)}</div>
              <div className="spend-edit">
                <Link to={editLink} budgetId={props.budgetId}>Edit</Link>
              </div>
            </div>
    )
}

export default SpendLine
