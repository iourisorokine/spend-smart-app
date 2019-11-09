import React from 'react'

const Budget = props => {
    return (
        <div className="budget narrow-wrapper">
            <h4>{props.budget.name}</h4>
            <p>{props.budget.description}</p>
        </div>
    )
}

export default Budget
