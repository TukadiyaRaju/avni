import React from "react";

function ProductCountDiv(props) {
    const initialPrice = props.price;
    let price = initialPrice;
    function Plus() {
        price += initialPrice;
        document.querySelector(".product-count").innerHTML++;
        document.querySelector(".price-text").innerHTML = `$${Math.round(price*100)/100}`;
    }

    function Minus() {
        price -= initialPrice;
        if(document.querySelector(".product-count").innerHTML > 1){
            document.querySelector(".product-count").innerHTML--;
            document.querySelector(".price-text").innerHTML = `$${Math.round(price*100)/100}`;
        }
    }

    return (
        <>
            <div className="product-count-div">
                <div onClick={Minus} className="minus">-</div>
                <div className="product-count">{props.count}</div>
                <div onClick={Plus} className="plus">+</div>
            </div>
        </>
    )
}

export default ProductCountDiv;