import React from "react";

function ProfileButton(props){
    let darkmode = localStorage.getItem("darkmode");
    return(
        <div className={darkmode === "true" ? "profile-button dark" : "profile-button"} onClick={props.click}>
            <img className="profile-button-icon" src={props.image}></img>
            <p className="profile-button-text">{props.text}</p>
        </div>
    )
}

export default ProfileButton;