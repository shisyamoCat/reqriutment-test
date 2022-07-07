import React from "react";

const Pref = (props) => {
    return (
        <div>
            <input
                id={props.prefName}
                type="checkbox"
                check="false"
                // onClick={() => setIsSelected(!props.setIsSelected)}
            />
            <label htmlFor={props.prefName}>{props.prefName}</label>
        </div>
    )
}

export default Pref
