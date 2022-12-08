import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import BackButton from "./backbutton";
import LightDarkButton from "./lightdarkbutton";
import Navbar from "./navbar";
import ProfileButton from "./profilebutton";

function ProfilePage(){
    let user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    let darkmode = localStorage.getItem("darkmode");

    function LogOut() {
        localStorage.clear();
        navigate("/login");
    }

    return(
        <>
            <div className= {darkmode === "true" ? "profile-container dark" : "profile-container"}>
                <div className={darkmode === "true" ? "profile-card dark" : "profile-card"}>
                    <div className="profile-image">
                        {/* <div><img src={user.image}></img></div> */}
                    </div>
                    <div>
                        <p className={darkmode === "true" ? "profile-name dark" : "profile-name"}>{user.name}</p>
                        <p className={darkmode === "true" ? "profile-username dark" : "profile-username"}>@{user.name}123</p>
                    </div>
                    <button>
                        <img src="../../assets/icons/edit-black.png"></img>
                    </button>
                </div>
                <div className={darkmode === "true" ? "level-container dark" : "level-container"}>
                    <div className="level-text">
                        <p>Level 1</p>
                        <p>Level 2</p>
                    </div>
                    <div className="full-bar">
                        <div className="progress-bar"></div>
                    </div>
                    <div className="leaves-required">
                        <p>5 Impact leaves required</p>
                    </div>
                </div>
                <div className="achieve-card">
                    <div>
                        <img src="../../assets/icons/cherries.svg"></img>
                        <p className="achievement-name">Cherries</p>
                        <p className="achievement-score">10</p>
                    </div>
                    <div>
                        <img src="../../assets/icons/level.svg"></img>
                        <p className="achievement-name">Level</p>
                        <p className="achievement-score">1</p>
                    </div>
                    <div>
                        <img src="../../assets/icons/help.svg"></img>
                        <p className="achievement-name">Total Donations</p>
                        <p className="achievement-score">2</p>
                    </div>
                </div>
                <div className="impact-card">
                    <img className="leaf" src="../../assets/icons/leaf.svg"></img>
                    <p className="impact-score">16</p>
                    <p className="impact-text">Impact Leaves</p>
                    <div>
                        <img className="info-button" src="../../assets/icons/info.svg"></img>
                    </div>
                </div>
                <div className="profile-buttons-container">
                    <ProfileButton image="../../assets/icons/card.svg" text="Show transaction history" />
                    <ProfileButton image="../../assets/icons/settings.svg" text="Settings" />
                    <ProfileButton image="../../assets/icons/adduser.svg" text="Add friends" />
                    <ProfileButton click={LogOut} image="../../assets/icons/logout.svg" text="Log out" />
                </div>
            </div>

            
        </>
    )
}

export default ProfilePage;