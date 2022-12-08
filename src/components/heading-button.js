import React from "react";

function HeadingButton(props) {
    let darkmode = localStorage.getItem("darkmode");

    if(darkmode === "true") {
        return (
            <div className="heading-button dark">
                <p>{props.name}</p>
                <img src="../../assets/icons/right-arrow.svg"></img>
            </div>
        )
    } else {
        return (
            <div className="heading-button">
                <p>{props.name}</p>
                <img src="../../assets/icons/right-arrow.svg"></img>
            </div>
        )
    }
}

export default HeadingButton;