import React from "react";
import DonationCard from "./donationcard";
import HeadingButton from "./heading-button";
import ProductCard from "./productcard";

function DAll(){
    return (
        <>
            <HeadingButton name="Help" />
            <div className="cards-container">
                <DonationCard
                    name="Clean Delhi"
                    image="../../assets/images/delhipollution.jpg"
                    company="ABC GROUP"
                    desc="Reducing carbon from air"
                    count="500"
                    impact="8"
                />
                <DonationCard
                    name="Team Trees"
                    image="../../assets/images/plant1.jpg"
                    company="MR. BEAST"
                    desc="Planting one tree for 1$"
                    count="2000"
                    impact="9"
                />
                <DonationCard
                    name="Plant a Billion Trees"
                    image="../../assets/images/plant2.jpg"
                    company="NATURE.ORG"
                    desc="Mission to plant 1 Billion trees"
                    count="2500"
                    impact="9"
                />
                <DonationCard
                    name="Plant for the Planet"
                    image="../../assets/images/plant3.jpg"
                    company="ABC FOUNDATION"
                    count="1300"
                    impact="9"
                />
                <DonationCard
                    name="50 Million Trees"
                    image="../../assets/images/plant4.jpg"
                    company="NATIONAL FORESTS"
                    count="1500"
                    impact="9"
                />
            </div>
        </>
    )
}

export default DAll;