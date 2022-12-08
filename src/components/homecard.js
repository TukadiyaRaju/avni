import React from "react";
import { useNavigate } from "react-router-dom";

function HomeCard(props) {
    const navigate = useNavigate();
    let route = props.title.toLowerCase().replace(/\s/g, "");

    if(props.swcyd == "true") {
        return (
            <div onMouseUp={() => {navigate("/"+route)}} className="home-card" style={{backgroundImage: "url(" + props.image + ")"}}>
                <p className="home-card-title">{props.title}</p>
                <div className="swcyd-div">
                    <p className="swcyd-text">See what can you do</p>
                    <img src="../../assets/icons/right-arrow.svg"></img>
                </div>
            </div>
        )
    } else {
        return (
            <div className="home-card" style={{backgroundImage: "url(" + props.image + ")"}}>
                <p className="home-card-title">{props.title}</p>
                {/* <p>See what can you do <img src="../../assets/icons/right-arrow.svg"></img></p> */}
            </div>
        )
    } 
}

export default HomeCard;