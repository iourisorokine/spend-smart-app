import React from 'react';
import {Link} from 'react-router-dom';

const SpendLine = props => {
    return (
            <div className="spend-line">
              <div className="spend-title">{props.spend.name}</div>
              <div className="spend-cat">{props.spend.category}</div>
              <div className="spend-amount">{props.spend.amount} EUR</div>
              <div className="spend-edit">
                <Link to="#">Edit</Link>
              </div>
            </div>
    )
}

export default SpendLine
