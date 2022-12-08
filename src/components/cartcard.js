import React from "react";
import { useMediaQuery } from "react-responsive";
import ProductCountDiv from "./product-count-div";

function CartCard(props) {
    function Delete(event){
        let element = event.target.parentNode.parentNode.parentNode;
        let productList = JSON.parse(localStorage.getItem("cart"));
        let newList = [];
        productList.forEach((product, index) => {
            if(product.id === props.id) {
                // productList.splice(index, 1);
            } else {
                newList.push(product);
            }
        });
        localStorage.setItem("cart", JSON.stringify(newList));
        element.remove();
    }

    if (useMediaQuery({ query: '(min-width: 900px)'})) {
        return (
            <>
                <div className="cart-card">
                    <div className="left-div">
                        <div className="cart-card-image" style={{backgroundImage: "url(" + props.image + ")"}}></div>
                        <div className="cart-card-name">{props.name}</div>
                        <div className="impact-div">
                            <img src="../../assets/icons/leaf.svg"></img>
                            <h3>{props.impact}</h3>
                        </div>
                    </div>
                    <div className="right-div">
                        <ProductCountDiv count={props.count} price={props.price} />
                        <h3 className="price-text">${props.price}</h3>
                        <div className="delete-button" onClick={Delete}>
                            <img src="../../assets/icons/bin.svg"></img>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="cart-card">
                    <div className="left-div">
                        <div className="cart-card-image" style={{backgroundImage: "url(" + props.image + ")"}}></div>
                        <div className="cart-card-name">{props.name}</div>
                    </div>
                    <div className="right-div">
                        <ProductCountDiv count={props.count} price={props.price} />
                        <h3 className="price-text">${props.price}</h3>
                        <div className="delete-button" onClick={Delete}>
                            <img src="../../assets/icons/bin.svg"></img>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CartCard;