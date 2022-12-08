import React from "react";
import { useMediaQuery } from "react-responsive";
import DonationCard from "./components/donationcard";
import LightDarkButton from "./components/lightdarkbutton";
import Navbar from "./components/navbar";
import ProfilePage from "./components/profile";
import SearchBar from "./components/searchbar";
import TopButton from "./components/topbutton";

function HomeCardDetail(props) {
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
                <h2 className={darkmode === "true" ? "dark" : null}>{props.title}</h2>
                <div className="wrap-container">
                    <DonationCard
                        name="Fundraiser 1"
                        company="ABC GROUP"
                        // desc="Reducing carbon from air"
                        count="400"
                        impact="7"
                    />
                    <DonationCard
                        name="Fundraiser 2"
                        company="ABC GROUP"
                        // desc="Reducing carbon from air"
                        count="500"
                        impact="7"
                    />
                    <DonationCard
                        name="Fundraiser 3"
                        company="ABC GROUP"
                        // desc="Reducing carbon from air"
                        count="470"
                        impact="6"
                    />
                    <DonationCard
                        name="Fundraiser 4"
                        company="ABC GROUP"
                        // desc="Reducing carbon from air"
                        count="300"
                        impact="6"
                    />
                    <DonationCard
                        name="Fundraiser 5"
                        company="ABC GROUP"
                        // desc="Reducing carbon from air"
                        count="500"
                        impact="8"
                    />
                    <DonationCard
                        name="Fundraiser 6"
                        company="ABC GROUP"
                        // desc="Reducing carbon from air"
                        count="280"
                        impact="7"
                    />
                    <DonationCard
                        name="Fundraiser 7"
                        company="ABC GROUP"
                        // desc="Reducing carbon from air"
                        count="500"
                        impact="8"
                    />
                    <DonationCard
                        name="Fundraiser 8"
                        company="ABC GROUP"
                        // desc="Reducing carbon from air"
                        count="300"
                        impact="6"
                    />
                </div>
            </div>
            {useMediaQuery({ query: '(min-width: 900px)'}) ? <ProfilePage /> : null}
        </>
    )
}

export default HomeCardDetail;