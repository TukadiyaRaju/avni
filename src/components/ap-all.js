import React from "react";
import DonationCard from "./donationcard";
import HeadingButton from "./heading-button";
import ProductCard from "./productcard";

function APAll(){
    return (
        <>
            <HeadingButton name="Reccomended Products" />
            <div className="cards-container">
                <ProductCard
                    name="Air Ink 50mm Marker"
                    image="../../assets/images/airink50mm.jpg"
                    desc="A marker made out of pollution"
                    rating="4.5"
                    price="39.99"
                    impact="7"
                />
                <ProductCard
                    name="Air Ink 15mm Marker"
                    image="../../assets/images/airink15mm.jpg"
                    desc="A marker made out of pollution"
                    rating="4.5"
                    price="35.00"
                    impact="7"
                />
                <ProductCard
                    name="Air Ink 2mm Marker"
                    image="../../assets/images/airink2mm.png"
                    desc="A marker made out of pollution"
                    rating="4.6"
                    price="30.00"
                    impact="7"
                />
                <ProductCard
                    name="Snake Plant"
                    image="../../assets/images/snakeplant.jpg"
                    desc="Indoor Plant that absorbs pollution"
                    rating="4.6"
                    price="30.00"
                    impact="5"
                />
            </div>

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

export default APAll;