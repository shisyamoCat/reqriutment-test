import React from "react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const useStyles = makeStyles(() => {
    createStyles({
        "form": {
            borderColor: "#444",
            color: "#444",
            fontWeight: 400,
        }
    })
})

const Pref = (props) => {
    const classes = useStyles();
  return (
    <div>
        <FormGroup
            className={classes.form}
            // onClick={() => props.select()}
        >
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={props.prefName}
            />
        </FormGroup>
    </div>
  )
}

export default Pref
