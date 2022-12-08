import React, { useState } from "react";
import Navbar from "./components/navbar";
import ProfilePage from "./components/profile";
import SearchBar from "./components/searchbar";
import LightDarkButton from "./components/lightdarkbutton";
import CartCard from "./components/cartcard";
import TopButton from "./components/topbutton";
import CartCta from "./components/cart-cta";
import { useMediaQuery } from "react-responsive";
import ProfileButtonMobile from "./components/profilebutton-mobile";

function Cart(){
    let darkmode = localStorage.getItem("darkmode");
    if(darkmode === "true"){
        {document.querySelector("body").style.backgroundColor = "#1E1F22"}
    } else {
        {document.querySelector("body").style.backgroundColor = "#F7F7F7"}
    }

    let totalItems = 1;
    let totalImpact = 0;
    let totalPrice = 0;

    // Rendering Product Cards in Cart
    let productList = JSON.parse(localStorage.getItem("cart"));
    let content = [<CartCard name="Sample Product" impact={7} count={1} price={0.00} />];
    if (productList != null){
        productList.forEach(product => {
            content.push(<CartCard
                            name={product.name}
                            impact={product.impact}
                            count={product.count}
                            price={product.price}
                            id={product.id}
                        />)
            totalItems++;
            totalImpact += product.impact;
            totalPrice += product.price;
        });
    }

    if (useMediaQuery({ query: '(min-width: 900px)'})) {
        return (
            <>
                <Navbar />
                <div className="main-container">
                    <div className="header">
                        <SearchBar />
                        <LightDarkButton />
                    </div>
                    <h2 className={darkmode === "true" ? "dark" : null}>Your Cart</h2>
                    <div className="grid-container cart-container">
                        <div className="carts-container">
                            {/* <CartCard name="Sample Product" impact={7} count={1} price={39.99} /> */}
                            {content}
                        </div>
                        <div>
                            <h4>ENTER PROMO CODE</h4>
                            <input></input>
                            <br />
                            <TopButton name="Apply" class="top-button active" />
                            <div className="cart-impact-div">
                                <div>
                                    <img src="../../assets/icons/leaf.svg"></img>
                                    <p>{totalImpact}</p>
                                </div>
                                
                                <p>Your cart contains a total of {totalImpact} impact leaves!</p>
                            </div>
                        </div>
                        <CartCta items={totalItems} price={Math.round(totalPrice*100)/100} />
                    </div>
                </div>
                <ProfilePage />
            </>
        )
    } else {
        return (
            <>
                <Navbar />
                <div className="main-container">
                    <div className="header">
                        <SearchBar />
                        <ProfileButtonMobile />
                    </div>
                    <h2 className={darkmode === "true" ? "dark" : null}>Your Cart</h2>
                    <div className="cart-impact-div">
                        <div>
                            <img src="../../assets/icons/leaf.svg"></img>
                            <p>{totalImpact}</p>
                        </div>
                        <p>Your cart contains a total of {totalImpact} impact leaves!</p>
                    </div>
                    <div className="cart-container">
                        <div className="carts-container">
                            {/* <CartCard name="Sample Product" impact={7} count={1} price={39.99} /> */}
                            {content}
                        </div>
                    </div>
                    <div className="promo-code-div">
                        <h4>ENTER PROMO CODE</h4>
                        <div>
                            <input></input>
                            <br />
                            <TopButton name="Apply" class="top-button active" />
                        </div>
                    </div>
                    <CartCta items={totalItems} price={Math.round(totalPrice*100)/100} country="IN" currency="INR" />
                </div>
            </>
        )
    }
    
}

export default Cart;