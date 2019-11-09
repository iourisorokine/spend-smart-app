import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import BudgetsList from "./BudgetsList";

const Home = props => {
    return (
        <div>
            {props.user&&(<p>Hi, {props.user.username}!</p>)}
            <Link to="/create-budget">
                <Button>New Budget</Button>
            </Link>
            <BudgetsList/>
        </div>
    )
}

export default Home
