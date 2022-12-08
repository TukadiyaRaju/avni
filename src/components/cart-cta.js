import React from "react";
import { useMediaQuery } from "react-responsive";
import CheckoutButton from "./checkout-button";
import TopButton from "./topbutton";

function CartCta(props) {

    if (useMediaQuery({ query: '(min-width: 900px)'})) {
        return (
            <>
                <div className="cart-cta">
                    <div className="left-div">
                        <div>
                            <h3>Total</h3>
                            <p>{props.items} Items</p>
                        </div>
                        <h2 className="price-text">${props.price}</h2>
                    </div>
                    <div className="right-div">
                        <CheckoutButton name="Secure Chekout" />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="cart-cta">
                    <div className="left-div">
                        <div>
                            <h3>Total</h3>
                            <p>{props.items} Items</p>
                        </div>
                        <h2 className="price-text">${props.price}</h2>
                    </div>
                    <div className="right-div">
                        <CheckoutButton name="Checkout" price={props.price} country={props.country} currency={props.currency} />
                    </div>
                </div>
            </>
        )
    }
    
}

export default CartCta;