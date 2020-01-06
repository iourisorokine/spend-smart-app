import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button
} from "@material-ui/core";
import { styles } from "../../styles/GlobalMUIStyles";
import axios from "axios";

const AddBudgetParticipants = props => {
  const { classes } = props;
  const [newParticipant, setNewParticipant] = useState(null);
  const [message, setMessage] = useState(null);

  const addParticipant = () => {
    const userName = newParticipant;
    axios.get(`./api/user/${userName}`).then(res => {
      if (!res.data.found) {
        setMessage(res.data.message)
      } else if (props.participants.indexOf(res.data.found[0]._id)!==-1){
        setMessage("The budget is already shared with this user")
      }else{
        props.setParticipants(props.participants.concat(res.data.found[0]._id));
        setMessage(res.data.message)
      }
    });
  };

  return (
    <form>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="name">Search participants:</InputLabel>
          <Input
            name="participantName"
            type="text"
            onChange={e => setNewParticipant(e.target.value)}
          />
        {message&&<p>{message}</p>}
        </FormControl>
        <Button className={classes.buttonBlueGrad} onClick={addParticipant}>
          Add
        </Button>
      </FormGroup>
    </form>
  );
};

export default withStyles(styles)(AddBudgetParticipants);
