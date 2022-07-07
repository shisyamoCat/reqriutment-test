import React from 'react';
import { pref } from './Pref';

const PrefList = (props) => {
    return (
        <div className="pref-grid">
            {props.prefData.map((value, key) => {
                return <Pref prefName={value.prefName} key={index.toString()}/>
            })}
            <pref/>
        </div>
    );
}

export default PrefList