import React from "react";
import { useNavigate } from "react-router-dom";

function ProfileButtonMobile(props) {
    const navigate = useNavigate();

    function HandleClick() {
        navigate("/profile");
    }

    if(props.image != null) {
        return (
            <>
                <div onClick={HandleClick} className="profile-button-mobile" style={{backgroundImage: "url(" + props.image + ")"}}>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div onClick={HandleClick} className="profile-button-mobile">
                    <img src="../../assets/icons/user.svg"></img>
                </div>
            </>
        )
    }
}

export default ProfileButtonMobile;