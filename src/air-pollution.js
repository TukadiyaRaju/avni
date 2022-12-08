import React from "react";
import BackButton from "./components/backbutton";
import LightDarkButton from "./components/lightdarkbutton";
import Navbar from "./components/navbar";
import ProfilePage from "./components/profile";
import SearchBar from "./components/searchbar";
import TopButton from "./components/topbutton";
import APAll from "./components/ap-all";
import APProducts from "./components/ap-products";
import APDonation from "./components/ap-donations";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function HandleClick(event) {
    let container = document.querySelector(".air-pollution-container");
    document.querySelectorAll(".top-button").forEach(function(button) {
        button.classList.remove("active");
    })
    event.target.classList.add("active");

    if(event.target.innerHTML === "All") {
        ReactDOM.render(
            <BrowserRouter>
                <APAll />
            </BrowserRouter>
            , container);
    } else if(event.target.innerHTML === "Products") {
        ReactDOM.render(
            <BrowserRouter>
                <APProducts />
            </BrowserRouter>
            , document.querySelector(".air-pollution-container"));
    } else if(event.target.innerHTML === "Donations") {
        console.log("friends");
        ReactDOM.render(
            <BrowserRouter>
                <APDonation />
            </BrowserRouter>
            , container);
    }
}

function AirPollution() {
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
                <h2 className={darkmode === "true" ? "dark" : null}>Air Pollution</h2>
                <div className="top-button-container categories-buttons">
                    <TopButton name="All" click={HandleClick} class="top-button active" />
                    <TopButton name="Products" click={HandleClick} class="top-button" />
                    <TopButton name="Donations" click={HandleClick} class="top-button" />
                </div>
                <div className="air-pollution-container">
                    <APAll />
                </div>
            </div>
            {useMediaQuery({ query: '(min-width: 900px)'}) ? <ProfilePage /> : null}
        </>
    )
}

export default AirPollution;