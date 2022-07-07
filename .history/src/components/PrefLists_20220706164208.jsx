import { FormGroup } from '@material-ui/core';
import React from 'react';
import { default as Pref } from './Pref';

const PrefLists = (props) => {
            const array1 = [1,2,3];

    return (

        <div className="pref-grid">
            {/* {props.prefData.map((value, index) => {
                return <Pref
                    prefName={value.prefName}
                    key={index.toString()}
                    checked={props.isSelected}
                    />
            })} */}
            array1.map((value) => <FormGroup/>);
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