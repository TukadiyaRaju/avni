import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from "react-router-dom";
import Rewards from "../rewards";

function Navbar() {
    const navigate = useNavigate();

    function HandleLoad() {
        if(window.location.pathname === "/home") {
            document.querySelector(".home-button").classList.add("active");
        } else if(window.location.pathname === "/rewards") {
            document.querySelector(".reward-button").classList.add("active");
        } else if(window.location.pathname === "/leaderboard") {
            document.querySelector(".leaderboard-button").classList.add("active");
        } else if(window.location.pathname === "/cart") {
            document.querySelector(".cart-button").classList.add("active");
        }
    }
    

    function HandleClick(event) {
        document.querySelectorAll(".nav-button").forEach(function(button){
            if(button.classList[1] != event.target.classList[1]){
                button.classList.remove("active");
            } else {
                event.target.classList.add("active");
            }
        });
        
        
        document.querySelectorAll(".nav-button").forEach(function(button) {
            if(button.classList[2] == "active" || button.classList[3] == "active") {
                if(button.classList[1] == "home-button") {
                    return navigate("/home");
                } else if (button.classList[1] == "reward-button") {
                    return navigate("/rewards");
                } else if (button.classList[1] == "leaderboard-button") {
                    return navigate("/leaderboard");
                } else if (button.classList[1] == "cart-button") {
                    return navigate("/cart");
                }
            }
        });
    }

    let darkmode = localStorage.getItem("darkmode");
    
    if(darkmode === "true") {
        return (
            <div onLoad={HandleLoad} className="navbar">
                <img className="logo" src="../../assets/logo/avni-v1.svg"></img>
                <div className="nav-buttons-container dark">
                    <button onClick={HandleClick} className="nav-button home-button dark"><img src="../../assets/icons/home.svg"></img></button>
                    <button onClick={HandleClick} className="nav-button reward-button dark"><img src="../../assets/icons/reward.svg"></img></button>
                    <button onClick={HandleClick} className="nav-button leaderboard-button dark"><img src="../../assets/icons/leaderboard.svg"></img></button>
                    <button onClick={HandleClick} className="nav-button cart-button dark"><img src="../../assets/icons/cart.svg"></img></button>
                </div>
                
            </div>
        )
    } else {
        return (
            <div onLoad={HandleLoad} className="navbar">
                <img className="logo" src="../../assets/logo/avni-v1.svg"></img>
                <div className="nav-buttons-container">
                    <button onClick={HandleClick} className="nav-button home-button"><img src="../../assets/icons/home.svg"></img></button>
                    <button onClick={HandleClick} className="nav-button reward-button"><img src="../../assets/icons/reward.svg"></img></button>
                    <button onClick={HandleClick} className="nav-button leaderboard-button"><img src="../../assets/icons/leaderboard.svg"></img></button>
                    <button onClick={HandleClick} className="nav-button cart-button"><img src="../../assets/icons/cart.svg"></img></button>
                </div>
                
            </div>
        )
    }

    
}

export default Navbar;