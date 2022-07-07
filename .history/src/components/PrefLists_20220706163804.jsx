import { FormGroup } from '@material-ui/core';
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
            const array1 = ["北海道","青森","秋田"];
            array1.forEach((value) => <FormGroup/>);
                {/* <input
                    id='check'
                    type="checkbox"
                    check="false"
                    // onClick={() => setIsSelected(!props.setIsSelected)}
                />
                <label htmlFor="check"></label> */}
        </div>
    );
}

export default PrefLists