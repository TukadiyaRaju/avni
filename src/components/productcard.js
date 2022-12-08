import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductCard(props) {
    const navigate = useNavigate();
    let route = props.name.toLowerCase().replace(/\s/g, "");
    let darkmode = localStorage.getItem("darkmode");
    let linkRoute = "/products/" + route;

    function HandleClick() {
        navigate("/products/" + route)
        window.location.reload();
    }

    return(
            <div onClick={HandleClick} className={darkmode === "true" ? "product-card dark" : "product-card"}>
                <div className="product-image" style={{backgroundImage: "url(" + props.image + ")"}}></div>
                <p className="product-name">{props.name}</p>
                <div className="product-desc">{props.desc}</div>
                <div className="product-rating">
                    <img src="../../assets/icons/star.svg"></img>
                    <p>{props.rating}</p>
                </div>
                <div className="price-impact">
                    <p className="product-price">${props.price}</p>
                    <div className="product-impact">
                        <img src="../../assets/icons/leaf.svg"></img>
                        <p>{props.impact}</p>
                    </div>
                </div>
            </div>
        
    )
}

export default ProductCard;