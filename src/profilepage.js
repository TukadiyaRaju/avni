import React from "react";
import BackButton from "./components/backbutton";
import LightDarkButton from "./components/lightdarkbutton";
import Navbar from "./components/navbar";
import ProfilePage from "./components/profile";

function ProfilePageMobile() {
    return(
        <>
            <BackButton />
            <LightDarkButton />
            <ProfilePage />
            <Navbar />
        </>
    )
}

export default ProfilePageMobile;