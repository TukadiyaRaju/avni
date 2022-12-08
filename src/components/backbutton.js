import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(-1)} className="back-button">
            <img src="../../assets/icons/right-arrow.svg"></img>
        </div>
    )
}

export default BackButton;