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
                id={props.prefName}
                className={classes.form}
                onChange={togglePref}
                control={<Checkbox defaultChecked />} label={props.prefName}
                checked={props.isSelected}
            />
        </FormGroup>
            <input
                type="checkbox"

            />
        </div>
    )
}

export default Pref
