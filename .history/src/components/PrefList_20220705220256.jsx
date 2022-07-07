import React from 'react';
import { pref } from './Pref';

const PrefList = (props) => {
    return (
        <div className="pref-grid">
            {props.prefData.map()}
            <pref/>
        </div>
    );
}

export default PrefList