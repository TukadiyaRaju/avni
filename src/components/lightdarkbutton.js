import React from "react";

function LightDarkButton(){
    function HandleClick(){
        let button = document.querySelector(".light-dark-button");

        button.classList.toggle("dark");
        if(button.classList[1] != null && button.classList[1] === "dark"){
            button.innerHTML = `<img className="sun" src="../../assets/icons/sun.svg"></img>`
            document.querySelector("body").style.backgroundColor = "#1E1F22";
            localStorage.setItem("darkmode", "true");
        } else {
            button.innerHTML = `<img className="moon" src="../../assets/icons/moon.svg"></img>`
            document.querySelector("body").style.backgroundColor = "#F7F7F7";
            localStorage.setItem("darkmode", "false");
        }

        if(window.location.pathname != "/profile"){
            document.querySelector(".search-bar").classList.toggle("dark");
            document.querySelector(".profile-container").classList.toggle("dark");
            document.querySelector(".profile-card").classList.toggle("dark");
            document.querySelector(".profile-name").classList.toggle("dark");
            document.querySelector(".profile-username").classList.toggle("dark");
            document.querySelector(".level-container").classList.toggle("dark");
            let profileButtons = document.querySelectorAll(".profile-button");
            profileButtons.forEach(function(button){
                button.classList.toggle("dark");
            });
            document.querySelector(".nav-buttons-container").classList.toggle("dark");
            let navButtons = document.querySelectorAll(".nav-button");
            navButtons.forEach(function(button){
                button.classList.toggle("dark");
            });
            document.querySelectorAll(".heading-button").forEach(function(button){
                button.classList.toggle("dark");
            });
            if(window.location.pathname !== "/home") {
                document.querySelector("h2").classList.toggle("dark");
            }
            document.querySelectorAll(".product-card").forEach(function(card){
                card.classList.toggle("dark");
            });
            document.querySelectorAll(".donation-card").forEach(function(card){
                card.classList.toggle("dark");
            });
        } else {
            document.querySelector(".profile-container").classList.toggle("dark");
            document.querySelector(".profile-card").classList.toggle("dark");
            document.querySelector(".profile-name").classList.toggle("dark");
            document.querySelector(".profile-username").classList.toggle("dark");
            document.querySelector(".level-container").classList.toggle("dark");
            let profileButtons = document.querySelectorAll(".profile-button");
            profileButtons.forEach(function(button){
                button.classList.toggle("dark");
            });
            document.querySelector(".nav-buttons-container").classList.toggle("dark");
            let navButtons = document.querySelectorAll(".nav-button");
            navButtons.forEach(function(button){
                button.classList.toggle("dark");
            });
        }
        
    }

    let darkmode = localStorage.getItem("darkmode");
    if(darkmode === "true") {
        return(
            <div className="light-dark-button dark" onClick={HandleClick}>
                <img className="sun" src="../../assets/icons/sun.svg"></img>
                {/* <img className="sun" src="../../assets/icons/sun.svg"></img> */}
            </div>
        )
    } else {
        return(
            <div className="light-dark-button" onClick={HandleClick}>
                <img className="moon" src="../../assets/icons/moon.svg"></img>
                {/* <img className="sun" src="../../assets/icons/sun.svg"></img> */}
            </div>
        )
    }
}

export default LightDarkButton;