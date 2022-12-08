import React from "react";

import ReactDOM from "react-dom";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter } from "react-router-dom";
import BackButton from "./components/backbutton";
import LightDarkButton from "./components/lightdarkbutton";
import Navbar from "./components/navbar";
import ProfilePage from "./components/profile";
import PWAll from "./components/pw-all";
import PWDonation from "./components/pw-donations";
import PWProducts from "./components/pw-products";
import SearchBar from "./components/searchbar";
import TopButton from "./components/topbutton";

function HandleClick(event) {
    let container = document.querySelector(".plastic-waste-container");
    document.querySelectorAll(".top-button").forEach(function(button) {
        button.classList.remove("active");
    })
    event.target.classList.add("active");

    if(event.target.innerHTML === "All") {
        ReactDOM.render(
            <BrowserRouter>
                <PWAll />
            </BrowserRouter>
            , container);
    } else if(event.target.innerHTML === "Products") {
        ReactDOM.render(
            <BrowserRouter>
                <PWProducts />
            </BrowserRouter>
            , container);
    } else if(event.target.innerHTML === "Donations") {
        console.log("friends");
        ReactDOM.render(
            <BrowserRouter>
                <PWDonation />
            </BrowserRouter>
            , container);
    }
}

function PlasticWaste() {
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
                <h2 className={darkmode === "true" ? "dark" : null}>Plastic Waste</h2>
                <div className="top-button-container categories-buttons">
                    <TopButton name="All" click={HandleClick} class="top-button active" />
                    <TopButton name="Products" click={HandleClick} class="top-button" />
                    <TopButton name="Donations" click={HandleClick} class="top-button" />
                </div>
                <div className="plastic-waste-container">
                    <PWAll />
                </div>
            </div>
            {useMediaQuery({ query: '(min-width: 900px)'}) ? <ProfilePage /> : null}
        </>
    )
}

export default PlasticWaste;