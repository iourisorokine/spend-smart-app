import React, {useState} from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button
} from "@material-ui/core";
import { styles } from "../styles/GlobalMUIStyles";
import axios from "axios";

const AddBudgetParticipants = props => {
    const { classes } = props;
    const [newParticipant, setNewParticipant] = useState(null)

const addParticipant=()=>{
    const userName = newParticipant;
    axios.get(`./api/user/${userName}`).then(res=>{
        console.log(res.data.found[0])
        props.setParticipants(props.participants.concat(res.data.found[0]._id))
        console.log(props.participants)
    })
}

  return (
    <div>
      <p>Add budget participants</p>
      <form>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="name">Searche participants:</InputLabel>
          <Input name="participantName" type="text" onChange={e=>setNewParticipant(e.target.value)} />
        </FormControl>
        <Button className={classes.buttonBlueGrad} onClick={addParticipant}>
            Add
        </Button>
      </FormGroup>
      </form>
      <Link
        className="black-link"
        onClick={() => props.setAddParticipants(false)}
        to="#">
        Back
      </Link>
    </div>
  );
};

export default withStyles(styles)(AddBudgetParticipants);
