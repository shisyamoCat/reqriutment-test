import React from 'react';
import { default as Pref } from './Pref';

const PrefLists = (props) => {
    return (
        <div className="pref-grid">
            <p>hello</p>
            {/* {props.prefData.map((value, index) => {
                return <Pref
                    prefName={value.prefName}
                    key={index.toString()}
                    checked={props.isSelected}
                    />
            })} */}
        </div>
    );
}

export default PrefLists