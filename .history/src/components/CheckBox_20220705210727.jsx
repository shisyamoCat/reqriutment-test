import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxLabels = (props) => {


    return (
        <FormGroup>
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
            />
        </FormGroup>
    );
}

export default CheckboxLabels