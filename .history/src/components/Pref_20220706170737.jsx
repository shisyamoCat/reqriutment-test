import React from "react";

const Pref = (props) => {
    return (
        <div>
            <input
                id='check'
                type="checkbox"
                check="false"
                // onClick={() => setIsSelected(!props.setIsSelected)}
            />
            <label htmlFor="check">{props.num}</label>
        </div>
    )
}

export default Pref
