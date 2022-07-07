import React from 'react';
import { Pref } from './Pref';

const PrefList = (props) => {
    return (
        <div className="pref-grid">
            {props.prefData.map((value, index) => {
                return <Pref prefName={value.prefName} key={index.toString()}/>
            })}
            <pref/>
        </div>
    );
}

export default PrefList