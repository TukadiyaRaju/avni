import React from "react";
import { useMediaQuery } from "react-responsive";

function UserBoard(props) {
    if(useMediaQuery({ query: '(min-width: 900px)'})){
        return (
            <div className="user-board">
                <div className="rank">#{props.rank}</div>
                <div><img className="user-image" src={props.image}></img></div>
                <div className="name-div">
                    <p className="board-name">{props.name}</p>
                    <p className="board-username">@{props.username}</p>
                </div>
                <div className="level">Level {props.level}</div>
                <div className="location">{props.location}</div>
                <div className="leaves-div">
                    <img src="../../assets/icons/leaf.svg"></img>
                    <p>{props.leaves}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="user-board">
                <div className="left-div">
                    <div><img className="user-image" src={props.image}></img></div>
                    <div>
                        <p className="board-name">{props.name}</p>
                        <div>
                            <div className="rank">#{props.rank}</div>
                            <div className="level">Level {props.level}</div>
                        </div>
                    </div>
                </div>
                <div className="leaves-div">
                    <img src="../../assets/icons/leaf.svg"></img>
                    <p>{props.leaves}</p>
                </div>
            </div>
        )
    }
}

export default UserBoard;