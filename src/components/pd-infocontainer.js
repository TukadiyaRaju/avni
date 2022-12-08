import React from "react";

function ProductDetailInfo(props) {
    return (
        <>
            <div className="product-info-container">
                <h3>{props.name}</h3>
                <div className="product-detail-rating">
                    <img className="star" src="../../assets/icons/star.svg"></img>
                    <img className="star" src="../../assets/icons/star.svg"></img>
                    <img className="star" src="../../assets/icons/star.svg"></img>
                    <img className="star" src="../../assets/icons/star.svg"></img>
                    <img className="star grey" src="../../assets/icons/star.svg"></img>
                    <p>{props.stars} (45 reviews)</p>
                </div>
                <div className="product-detail-impact">
                    <img className="leaf" src="../../assets/icons/leaf.svg"></img>
                    <h3>{props.impact}</h3>
                </div>
                <div className="product-detail-info">
                    <h4>PRODUCT DESCRIPTION</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="product-detail-info">
                    <h4>ABOUT THE SELLER</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetailInfo;