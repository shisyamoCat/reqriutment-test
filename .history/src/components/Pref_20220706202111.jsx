import React from "react";

const Pref = (props) => {
    return (
        <div className="btn-pref" id="btn-pref">
            <input
                id={props.prefName}
                className="input-pref"
                type="checkbox"
                check="false"
                // onClick={() => setIsSelected(!props.setIsSelected)}
            />
            <label htmlFor={props.prefName}>{props.prefName}</label>
        </div>
    )
}

export default Pref
