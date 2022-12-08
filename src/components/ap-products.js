import React from "react";
import HeadingButton from "./heading-button";
import ProductCard from "./productcard";

function APProducts(){
    return (
        <>
            <div className="wrap-container">
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
        </>
    )
}

export default APProducts;