import React from 'react';

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