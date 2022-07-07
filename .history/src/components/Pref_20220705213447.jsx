import React from "react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Pref = () => {
  return (
    <div>
        <FormGroup>
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
            />
        </FormGroup>
    </div>
  )
}

export default Pref
