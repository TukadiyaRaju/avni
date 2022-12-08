import React from "react";

function TopButton(props) {
    return (
        <button onClick={props.click} className={props.class} >
            {props.name}
        </button>
    )
}

export default TopButton;