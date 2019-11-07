import React, {useState, useEffect} from "react";
import { withStyles } from '@material-ui/core/styles';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from "@material-ui/core";
import { signup } from "../services/api";

const styles = {
    root: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: '20px 0',
    },
  };

const Signup = props => {

const { classes } = props;

const [userName, setUserName]= useState("")
const [password, setPassword]= useState("")
const [message, setMessage]= useState("")

const handleChange=e=>{
    const {name,value}=e.target;
    if(name==="username") setUserName(value)
    if(name==="password") setPassword(value)
    console.log(name, value)
}

const handleSubmit = e => {
    e.preventDefault();
    signup(userName, password).then(data => {
      console.log(data)
      if (data.message) {
        setMessage(data.message)
      } else {
        //adapt this
        this.props.setUser(data);
        this.props.history.push("/");
      }
    });
  };

  return (
    <div className="narrow-wrapper">
      <h2>Signup</h2>
      <FormGroup >
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input name="username" type="text" onChange={handleChange}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input name="password" type="password" onChange={handleChange} aria-describedby="password-helper-text" />
          <FormHelperText id="password-helper-text">
            Password must be 8 char. min
          </FormHelperText>
        </FormControl>
        <Button className={classes.root} type="submit">Signup</Button>
      </FormGroup>
    </div>
  );
};

export default withStyles(styles)(Signup);
