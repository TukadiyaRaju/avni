import React from "react";

function RewardCard(props) {
    return(
        <div className="reward-card">
            <div><img src="../../assets/icons/cherries.svg"></img>{props.cherries}</div>
            <p>{props.offer}</p>
        </div>
    )
}

export default RewardCard;