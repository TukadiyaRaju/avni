import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import CheckoutButton from "./checkout-button";
import ProductCountDiv from "./product-count-div";
import TopButton from "./topbutton";

function DonationDetailCta(props) {
    const [price, setPrice] = useState(0.00);

    function HandleClick(input){
        
    }

    function HandleChange(){
        document.querySelector(".price-text").innerHTML = `$${document.querySelector(".product-detail-cta input").value}`
    }


    return(
        <>
            <div className="product-detail-cta">
                <div className="right-div">
                    <input onChange={HandleChange} placeholder="Add your amount"></input>
                    <h2 className="price-text">$0.00</h2>
                </div>
                <div className="right-div">
                    {/* <TopButton name="Donate" class="top-button active" click={HandleClick} /> */}
                    <CheckoutButton name="Donate" />
                </div>
            </div>
        </>
    )
}

export default DonationDetailCta;