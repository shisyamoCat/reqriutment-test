import React from "react";

const Pref = (props) => {
    return (
        <div>
            <input
                id={props.prefName}         // labelと連動させるためのid
                className="input-pref"
                type="checkbox"
                check="false"
                onClick={() => props.onClick(props.prefId)} // changeButtonState関数実行
            />

            <label
                className="btn-pref"
                htmlFor={props.prefName}    // inputと連動させるためのid
            >
                {props.prefName}
            </label>
        </div>
    )
}

export default Pref
