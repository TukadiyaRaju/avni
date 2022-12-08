import React from "react";
import { useMediaQuery } from "react-responsive";
import DonationCard from "./components/donationcard";
import LightDarkButton from "./components/lightdarkbutton";
import Navbar from "./components/navbar";
import ProfilePage from "./components/profile";
import SearchBar from "./components/searchbar";

function HimachalLandslides() {
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
                <h2 className={darkmode === "true" ? "dark" : null}>Himachal Landslides</h2>
                <div className="wrap-container">
                    <DonationCard
                        name="Delhi Pollution"
                        company="ABC GROUP"
                        desc="Reducing carbon from air"
                        count="500"
                        impact="7"
                    />
                    <DonationCard
                        name="Delhi Pollution"
                        company="ABC GROUP"
                        desc="Reducing carbon from air"
                        count="500"
                        impact="7"
                    />
                    <DonationCard
                        name="Delhi Pollution"
                        company="ABC GROUP"
                        desc="Reducing carbon from air"
                        count="500"
                        impact="7"
                    />
                    <DonationCard
                        name="Delhi Pollution"
                        company="ABC GROUP"
                        desc="Reducing carbon from air"
                        count="500"
                        impact="7"
                    />
                    <DonationCard
                        name="Delhi Pollution"
                        company="ABC GROUP"
                        desc="Reducing carbon from air"
                        count="500"
                        impact="7"
                    />
                    <DonationCard
                        name="Delhi Pollution"
                        company="ABC GROUP"
                        desc="Reducing carbon from air"
                        count="500"
                        impact="7"
                    />
                    <DonationCard
                        name="Delhi Pollution"
                        company="ABC GROUP"
                        desc="Reducing carbon from air"
                        count="500"
                        impact="7"
                    />
                    <DonationCard
                        name="Delhi Pollution"
                        company="ABC GROUP"
                        desc="Reducing carbon from air"
                        count="500"
                        impact="7"
                    />
                </div>
            </div>
            {useMediaQuery({ query: '(min-width: 900px)'}) ? <ProfilePage /> : null}
        </>
    )
}

export default HimachalLandslides;