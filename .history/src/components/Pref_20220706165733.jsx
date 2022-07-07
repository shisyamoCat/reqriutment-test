import React from "react";

const Pref = (props) => {
    return (
        <input
            id='check'
            type="checkbox"
            check="false"
            // onClick={() => setIsSelected(!props.setIsSelected)}
        />
        <label htmlFor="check"></label>
    )
}

export default Pref
