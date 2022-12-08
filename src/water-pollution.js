import React from "react";
import BackButton from "./components/backbutton";
import HeadingButton from "./components/heading-button";
import LightDarkButton from "./components/lightdarkbutton";
import Navbar from "./components/navbar";
import ProfilePage from "./components/profile";
import SearchBar from "./components/searchbar";
import TopButton from "./components/topbutton";
import WPAll from "./components/wp-all";
import WPDonation from "./components/wp-donations";
import WPProducts from "./components/wp-products";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function HandleClick(event) {
    let container = document.querySelector(".water-pollution-container");
    document.querySelectorAll(".top-button").forEach(function(button) {
        button.classList.remove("active");
    })
    event.target.classList.add("active");

    if(event.target.innerHTML === "All") {
        ReactDOM.render(
            <BrowserRouter>
                <WPAll />
            </BrowserRouter>
            , container);
    } else if(event.target.innerHTML === "Products") {
        ReactDOM.render(
            <BrowserRouter>
                <WPProducts />
            </BrowserRouter>
            , container);
    } else if(event.target.innerHTML === "Donations") {
        console.log("friends");
        ReactDOM.render(
            <BrowserRouter>
                <WPDonation />
            </BrowserRouter>
            , container);
    }
}

function WaterPollution() {
    let darkmode = localStorage.getItem("darkmode");
    if(darkmode === "true"){
        {document.querySelector("body").style.backgroundColor = "#1E1F22"}
    } else {
        {document.querySelector("body").style.backgroundColor = "#F7F7F7"}
    }
    
    return(
        <>
            <Navbar />
            <div className="main-container">
                <div className="header">
                    <SearchBar />
                    <LightDarkButton />
                </div>
                <h2 className={darkmode === "true" ? "dark" : null}>Water Pollution</h2>
                <div className="top-button-container categories-buttons">
                    <TopButton name="All" click={HandleClick} class="top-button active" />
                    <TopButton name="Donations" click={HandleClick} class="top-button" />
                </div>
                <div className="water-pollution-container">
                    <WPAll />
                </div>
            </div>
            {useMediaQuery({ query: '(min-width: 900px)'}) ? <ProfilePage /> : null}
        </>
    )
}

export default WaterPollution;