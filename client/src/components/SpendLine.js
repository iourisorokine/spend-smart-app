import React from 'react';
import {Link} from 'react-router-dom';
import EditSpend from './EditSpend';

const SpendLine = props => {
    const editLink=`/spend/${props.data._id}`;
    return (
            <div className="spend-line">
              <div className="spend-title">{props.data.name}</div>
              <div className="spend-cat">{props.data.category}</div>
              <div className="spend-amount">{props.data.amount} EUR</div>
              <div className="spend-edit">
                <Link to={editLink}>Edit</Link>
              </div>
            </div>
    )
}

export default SpendLine
