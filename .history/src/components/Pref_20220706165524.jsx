import React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Pref = (props) => {
    return (
        <FormGroup>
            <FormControlLabel
                // id={props.prefName}
                // className={classes.form}
                // // onChange={togglePref}
                // control={<Checkbox defaultChecked />}
                // label={props.prefName}
                // checked={props.isSelected}
                label={props.num}
            />
        </FormGroup>
    )
}

export default Pref
