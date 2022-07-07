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
            for(let i = 0; i < 47; i++){
                {/* <input
                    id='check'
                    type="checkbox"
                    check="false"
                    // onClick={() => setIsSelected(!props.setIsSelected)}
                />
                <label htmlFor="check"></label> */}
                <FormGroup num={i}/>
            }
        </div>
    );
}

export default PrefLists