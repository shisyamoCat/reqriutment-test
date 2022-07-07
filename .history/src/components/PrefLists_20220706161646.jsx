import React from 'react';
import { default as Pref } from './Pref';

const PrefLists = (props) => {
    return (
        <div className="pref-grid">
            {/* {props.prefData.map((value, index) => {
                return <Pref
                    prefName={value.prefName}
                    key={index.toString()}
                    checked={props.isSelected}
                    />
            })} */}
            <input id='check' type="checkbox" check="false" onClick={() => setIsSelected(!setIsSelected)} />
                <label htmlFor="check">北海道</label>

        </div>
    );
}

export default PrefLists