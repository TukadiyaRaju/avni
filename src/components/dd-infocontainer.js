import React from "react";

function DonationDetailInfo(props) {
    return (
        <>
            <div className="product-info-container">
                <h3>{props.name}</h3>
                <div className="product-detail-rating">
                    <h4>{props.fundraiser}</h4>
                    <p>{props.donations}+ Donations</p>
                </div>
                <div className="product-detail-impact">
                    <img className="leaf" src="../../assets/icons/leaf.svg"></img>
                    <h3>{props.impact}+</h3>
                </div>
                <div className="product-detail-info">
                    <h4>THE MISSION</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="product-detail-info">
                    <h4>ABOUT THE FUNDRAISER</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </>
    )
}

export default DonationDetailInfo;