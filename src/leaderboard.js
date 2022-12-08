import React from "react";
import Navbar from "./components/navbar";
import ProfilePage from "./components/profile";
import SearchBar from "./components/searchbar";
import LightDarkButton from "./components/lightdarkbutton";
import TopButton from "./components/topbutton";
import GlobalBoard from "./components/global-board";
import LocalBoard from "./components/local-board";
import FriendsBoard from "./components/friends-baord";

import ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import ProfileButtonMobile from "./components/profilebutton-mobile";

function Leaderboard(){
    let darkmode = localStorage.getItem("darkmode");
    if(darkmode === "true"){
        document.querySelector("body").style.backgroundColor = "#1E1F22";
    } else {
        document.querySelector("body").style.backgroundColor = "#F7F7F7";
    }
    
    function HandleClick(event) {
        let container = document.querySelector(".leaderboard-container");
        document.querySelectorAll(".top-button").forEach(function(button) {
            button.classList.remove("active");
        })
        event.target.classList.add("active");

        if(event.target.innerHTML === "Global") {
            console.log("global");
            ReactDOM.render(
                <GlobalBoard />
                , container);
        } else if(event.target.innerHTML === "Local") {
            console.log("local");
            ReactDOM.render(
                <LocalBoard />
                , container);
        } else if(event.target.innerHTML === "Friends") {
            console.log("friends");
            ReactDOM.render(
                <FriendsBoard />
                , container);
        }
    }

    return (
        <>
            <Navbar />
            <div className="main-container">
                <div className="header">
                    <SearchBar />
                    {useMediaQuery({ query: '(min-width: 900px)'}) ? <LightDarkButton /> : <ProfileButtonMobile />}
                </div>
                <h2 className={darkmode === "true" ? "dark" : null}>Leaderboard</h2>
                <div className="top-button-container leaderboard-buttons">
                    <TopButton name="Global" click={HandleClick} class="top-button active" />
                    <TopButton name="Local" click={HandleClick} class="top-button" />
                    <TopButton name="Friends" click={HandleClick} class="top-button" />
                </div>
                <div className="leaderboard-container">
                    <GlobalBoard />
                </div>
            </div>
            {useMediaQuery({ query: '(min-width: 900px)'}) ? <ProfilePage /> : null}
        </>
    )
}

export default Leaderboard;