import React from 'react';
import { default as Pref } from './Pref';

const PrefLists = (props) => {
    return (
        <div className="pref-grid">
            {/* {props.prefData.map((value, index) => { */}
                return
                for(i = 0; i < 47 ; i++){
                <Pref
                    prefName={value.prefName}
                    key={index.toString()}
                    checked={props.isSelected}
                    />
                    }
            {/* })} */}
        </div>
    );
}

export default PrefLists