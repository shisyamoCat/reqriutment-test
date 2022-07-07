import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const PrefList = (props) => {
    return (
        <div className="pref-grid">
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Label"
                />
            </FormGroup>
        </div>
    );
}

export default CheckboxLabels