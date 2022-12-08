import React from "react";
import DonationCard from "./donationcard";

function WPDonation() {
    return (
        <>
            <div className="wrap-container">
            <DonationCard
                    name="Cleaning Atlantic"
                    image="../../assets/images/ocean-pollution.jpg"
                    company="ABC GROUP"
                    desc="Making Atlantic Cleaner."
                    count="1000"
                    impact="8"
                />
                <DonationCard
                    name="Project Yamuna"
                    image="../../assets/images/yamuna.jpg"
                    company="ABC GROUP"
                    desc="Making Delhi's River bank clean again"
                    count="500"
                    impact="7"
                />
                <DonationCard
                    name="The Ganga Project"
                    image="../../assets/images/ganga.jpg"
                    company="ABC GROUP"
                    desc="River Ganga Cleaning Campaign"
                    count="500"
                    impact="7"
                />
                <DonationCard
                    name="Saving the Ocean"
                    company="MIRPURI FOUNDATION"
                    desc="Cleaning ocean, saving wildlife"
                    count="500"
                    impact="8"
                />
                <DonationCard
                    name="Surfrider Foundation"
                    image="../../assets/images/surfrider-foundation.jpg"
                    company="SURFRIDER FOUNDATION"
                    desc="Cleaning ocean, saving wildlife"
                    count="500"
                    impact="8"
                />
            </div>
        </>
    )
}

export default WPDonation;