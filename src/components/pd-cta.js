import React from "react";
import { useMediaQuery } from "react-responsive";
import ProductCountDiv from "./product-count-div";
import TopButton from "./topbutton";

function ProductDetailCta(props) {
    function HandleClick(event) {
        const content = `<div class="added-button"><img src="../../assets/icons/done.svg"></img>Added to Cart</div>`;
        event.target.innerHTML = content;

        if(localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", JSON.stringify([]))
        }
        let productList = JSON.parse(localStorage.getItem("cart"));

        const product = {
            name: props.name,
            id: props.id,
            impact: props.impact,
            count: document.querySelector(".product-count").innerHTML*1,
            price: document.querySelector(".price-text").innerHTML.slice(1, -1)*1
        }
        productList.push(product);
        localStorage.setItem("cart", JSON.stringify(productList));
    }

    if (useMediaQuery({ query: '(min-width: 900px)'})) {
        return (
            <>
                <div className="product-detail-cta">
                    <div className="left-div">
                        <h3>{props.name}</h3>
                        <p>{props.desc}</p>
                    </div>
                    <div className="right-div">
                        <ProductCountDiv count={props.count} price={props.price} />
                        <h2 className="price-text">${props.price}</h2>
                        <TopButton name="Add to Cart" class="top-button active" click={HandleClick} />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="product-detail-cta">
                    <div>
                        <h2 className="price-text">${props.price}</h2>
                        <ProductCountDiv count={props.count} price={props.price} />
                    </div>
                    <TopButton name="Add to Cart" class="top-button active" click={HandleClick} />
                </div>
            </>
        )
    }
    
}

export default ProductDetailCta;