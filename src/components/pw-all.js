import React from "react";
import DonationCard from "./donationcard";
import HeadingButton from "./heading-button";
import ProductCard from "./productcard";

function PWAll(){
    return (
        <>
            <HeadingButton name="Reccomended Products" />
            <div className="cards-container">
                <ProductCard
                    name="Paper Bags"
                    image="../../assets/images/paperbag2.jpg"
                    desc="Recyclable paper bags"
                    rating="4.5"
                    price="0.99"
                    impact="5"
                />
                <ProductCard
                    name="Recyclable Toothbrush"
                    image="../../assets/images/toothbrush2.jpg"
                    rating="4.0"
                    price="3.99"
                    impact="5"
                />
                <ProductCard
                    name="Earth Pots"
                    image="../../assets/images/earthpots.jpg"
                    desc="Paper bags made of recyclable matiral."
                    rating="4.5"
                    price="4.99"
                    impact="6"
                />
            </div>

            <HeadingButton name="Help" />
            <div className="cards-container">
                <DonationCard
                    name="200 tons of Plastic"
                    company="ABC GROUP"
                    desc="Collecting 200 tons of plastic by the end of 2023."
                    count="500"
                    impact="8"
                />
                <DonationCard
                    name="200 tons of Plastic"
                    company="ABC GROUP"
                    desc="Collecting 200 tons of plastic by the end of 2023."
                    count="500"
                    impact="8"
                />
                <DonationCard
                    name="200 tons of Plastic"
                    company="ABC GROUP"
                    desc="Collecting 200 tons of plastic by the end of 2023."
                    count="500"
                    impact="8"
                />
                <DonationCard
                    name="200 tons of Plastic"
                    company="ABC GROUP"
                    desc="Collecting 200 tons of plastic by the end of 2023."
                    count="500"
                    impact="8"
                />
            </div>

            <HeadingButton name="Small Impacts" />
        </>
    )
}

export default PWAll;