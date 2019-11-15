import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import BudgetsList from "./BudgetsList";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/GlobalMUIStyles";

const Home = props => {
    const {classes}=props;
    return (
        <div>
            {props.user&&(<p>Hi, {props.user.username}!</p>)}
            <Link to="/create-budget">
                <Button className={classes.buttonRoundAdd}>+</Button>
            </Link>
            <BudgetsList/>
        </div>
    )
}

export default withStyles(styles)(Home)
