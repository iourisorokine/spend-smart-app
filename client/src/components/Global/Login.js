import React, {useState, useEffect} from "react";
import { withStyles } from '@material-ui/core/styles';
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button
} from "@material-ui/core";
import { login } from "../../services/api";
import {styles} from "../../styles/GlobalMUIStyles"

const Login = props => {

const { classes } = props;

const [userName, setUserName]= useState("")
const [password, setPassword]= useState("")
const [message, setMessage]= useState("")

const handleChange=(e)=>{
    const {name,value}=e.target;
    if(name==="username") setUserName(value)
    if(name==="password") setPassword(value)
}

const handleSubmit = (e) => {
    console.log(userName, password)
    e.preventDefault();
    login(userName, password).then(data => {
      if (data.message) {
        setMessage(data.message)
      } else {
        //adapt this
        props.setUser(data);
        props.history.push("/");
      }
    });
  };

  return (
    <div className="narrow-wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input name="username" type="text" onChange={handleChange}/>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input name="password" type="password" onChange={handleChange} aria-describedby="password-helper-text" />
        </FormControl>
        <Button className={classes.buttonBlueGrad} type="submit">Login</Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default withStyles(styles)(Login);
