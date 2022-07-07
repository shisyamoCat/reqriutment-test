import React from "react";

const Pref = (props) => {
    return (
        <div>
            <input
                id={props.prefName}
                className="input-pref"
                type="checkbox"
                check="false"
                onClick={() => this.changeButtonState(props.key)}
            />
            <label
                className="btn-pref"
                htmlFor={props.prefName}>{props.prefName}
            </label>
        </div>
    )
}

export default Pref
