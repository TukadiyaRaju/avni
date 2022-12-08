import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "./components/carousel";
import { useMediaQuery } from "react-responsive";

function StartPage(){
    {document.querySelector("body").style.backgroundColor = "#153B2F"}
    
    return(
        <>
            <Carousel />
            <div className="start-link-div">
                <Link to="/signup"><button className="start-signup-button">Sign Up</button></Link>
                <Link to="/login"><button className="start-login-button">Log In</button></Link>
            </div>
            
        </>
    )
}

export default StartPage;