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
        <FormGroup>
            <FormControlLabel
                control={<Checkbox defaultChecked />} label={props.prefName}
                checked={props.isSelected}
            />
        </FormGroup>
            <input
                id={props.prefName}
                className={classes.form}
                type="checkbox"

                onChange={togglePref}
            />
        <label htmlFor={props.prefName}>{props.prefName}</label>
        </div>
    )
}

export default Pref
