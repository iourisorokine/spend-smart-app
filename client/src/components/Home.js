import React from 'react'
import Button from '@material-ui/core/Button';

const Home = props => {
    return (
        <div>
            <h2>This is home</h2>
            {props.user&&(<p>Hi, {props.user.username}!</p>)}
        </div>
    )
}

export default Home
