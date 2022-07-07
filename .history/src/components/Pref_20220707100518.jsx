import React from "react";

const Pref = (props) => {
    return (
        <div>
            <h2>都道府県</h2>
            <input
                id={props.prefName}
                className="input-pref"
                type="checkbox"
                check="false"
                onClick={() => props.onClick(props.prefId)}
            />
            <label
                className="btn-pref"
                htmlFor={props.prefName}>{props.prefName}
            </label>
        </div>
    )
}

export default Pref
