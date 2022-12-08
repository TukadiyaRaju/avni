import React from "react";
import { useNavigate } from "react-router-dom";

function DonationCard(props) {
    const navigate = useNavigate();
    let route = props.name.toLowerCase().replace(/\s/g, "");
    let darkmode = localStorage.getItem("darkmode");

    function HandleClick() {
        navigate("/donations/" + route)
        window.location.reload();
    }

    return(
        <div onClick={HandleClick} className={darkmode === "true" ? "donation-card dark" : "donation-card"}>
            <div className="donation-image" style={{backgroundImage: "url(" + props.image + ")"}}></div>
            <p className="donation-name">{props.name}</p>
            <p className="donation-company">{props.company}</p>
            <p className="donation-desc">{props.desc}</p>
            
            <div className="donation-impact">
                <div className="donation-count">
                    <p>{props.count}+ Donations</p>
                </div>
                <div className="product-impact">
                    <img src="../../assets/icons/leaf.svg"></img>
                    <p>{props.impact}+</p>
                </div>
            </div>
        </div>
    )
}

export default DonationCard;