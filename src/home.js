import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from "react-router-dom";

import ProfilePage from "./components/profile";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import LightDarkButton from "./components/lightdarkbutton";
import Category from "./components/categorycard";
import HeadingButton from "./components/heading-button";
import HomeCard from "./components/homecard";
import WaterPollution from "./water-pollution";
import ProfileButtonMobile from "./components/profilebutton-mobile";

function Home(){
    let navigate = useNavigate();
    let darkmode = localStorage.getItem("darkmode");
    if(darkmode === "true"){
        document.querySelector("body").style.backgroundColor = "#1E1F22"
    } else {
        document.querySelector("body").style.backgroundColor = "#F7F7F7"
    }
    

    return(
        <>
            <Navbar />
            <div className="main-container">
                <div className="header">
                    <SearchBar />
                    {useMediaQuery({ query: '(min-width: 900px)'}) ? <LightDarkButton /> : <ProfileButtonMobile />}
                </div>
                <HeadingButton name="Categories" />
                <div className="categories-container">
                    <Link to="/waterpollution"><Category name="Water Pollution" /></Link>
                    <Link to="/airpollution"><Category name="Air Pollution" /></Link>
                    <Link to="/plasticwaste"><Category name="Plastic Waste" /></Link>
                    <Link to="/deforestation"><Category name="Deforestation" /></Link>
                </div>

                <HeadingButton name="Help Disaster Victims" />
                <div className="cards-container">
                    <HomeCard title="Himachal Landslides" swcyd="true" image="../../assets/images/landslide1.jpg" />
                    <HomeCard title="Bihar Floods" swcyd="true" image="../../assets/images/flood2.jpg" />
                    <HomeCard title="Uttrakhand Landslides" swcyd="true" image="../../assets/images/landslide3.jpg" />
                </div>

                <HeadingButton name="Urgent Help" />
                <div className="cards-container">
                    <HomeCard title="Australia Forest Fire" swcyd="true" image="../../assets/images/forestfire.jpg" />
                    <HomeCard title="Bihar Floods" swcyd="true" image="../../assets/images/flood2.jpg" />
                    <HomeCard title="Himachal Landslides" swcyd="true" image="../../assets/images/landslide1.jpg" />
                </div>

                <HeadingButton name="Local Problems" />
                <div className="cards-container">
                    <HomeCard title="Delhi Pollution" swcyd="true" image="../../assets/images/delhipollution.jpg" />
                    <HomeCard title="Yamuna Pollution" swcyd="true" image="../../assets/images/yamuna.jpg" />
                    <HomeCard title="Mumbai Floods" swcyd="true" image="../../assets/images/flood3.jpg" />
                </div>

                <HeadingButton name="Current Problems" />
                <div className="cards-container">
                    <HomeCard title="Ocean Pollution" swcyd="true" image="../../assets/images/ocean-pollution.jpg" />
                    <HomeCard title="The Plastic Problem" swcyd="true" image="../../assets/images/plastic.jpg" />
                    <HomeCard title="Global Warming" swcyd="true" image="../../assets/images/globalwarming.jpg" />
                </div>
                {useMediaQuery({ query: '(min-width: 900px)'}) ? <ProfilePage /> : null}
            </div>
        </>
        
    )
    
}

export default Home;