import React from "react";
import { useNavigate } from "react-router-dom";

function CheckoutButton(props) {
    const navigate = useNavigate();
    async function HandleClick() {
        await fetch("/checkout", {
            method: "GET"
        })
        .then( (res) => {
            let promise = res.text();
            promise.then(value => {window.open(value,'__self')});
        });
    }

    return (
        <>
            <div onClick={HandleClick} className="checkout-button">
                <img src="../../assets/icons/lock.svg"></img>
                {props.name}
            </div>
        </>
    )
}

export default CheckoutButton;