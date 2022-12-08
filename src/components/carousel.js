import React from "react";
import { useMediaQuery } from "react-responsive";
import CarouselContent from "./carousel-content";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

function Carousel(){
    let slide = 0;

    function RenderContent(){
        let slidedots = document.querySelectorAll(".slide-dot");

        if(slide === 0) {
            for(let i = 0; i < 3; i++) {
                slidedots[i].classList.remove("active");
                if(i === slide){
                    slidedots[i].classList.add("active");
                }
            }

            ReactDOM.render(
                <BrowserRouter>
                    <CarouselContent
                        image="../../assets/images/cards.png"
                        text1 = "Donate,"
                        text2 = "Buy,"
                        text3 = "Get Rewards"
                    />
                </BrowserRouter>
                , document.querySelector(".carousel-content"));

        } else if(slide === 1) {
            for(let i = 0; i < 3; i++) {
                slidedots[i].classList.remove("active");
                if(i === slide){
                    slidedots[i].classList.add("active");
                }
            }

            ReactDOM.render(
                <BrowserRouter>
                    <CarouselContent
                        image="../../assets/images/leaderboard.png"
                        text1 = "See yourself"
                        text2 = "ranking on"
                        text3 = "Leaderboards!"
                    />
                </BrowserRouter>
                , document.querySelector(".carousel-content"));

        } else if(slide === 2) {
            for(let i = 0; i < 3; i++) {
                slidedots[i].classList.remove("active");
                if(i === slide){
                    slidedots[i].classList.add("active");
                }
            }

            console.log("friends");
            ReactDOM.render(
                <BrowserRouter>
                    <CarouselContent
                        image="../../assets/images/impact-plant.png"
                        text1 = "Determine your"
                        text2 = "contributions"
                        text3 = "with Impact Scores!"
                    />
                </BrowserRouter>
                , document.querySelector(".carousel-content"));
        }
    }
    
    function RightClick() {
        if(slide === 3){
            slide = 0;
        } else { slide++ }
        RenderContent();
    }

    function LeftClick() {
        if(slide === 0){
            slide = 3;
        } else { slide-- }
        RenderContent();
    }

    if(useMediaQuery({ query: '(min-width: 900px)'})) {
        return(
            <>
                <div className="carousel-container">
                    <div className="left-arrow" onClick={LeftClick}>
                        <img src="../../assets/icons/carousel-left.svg"></img>
                    </div>
                    <div className="carousel-content">
                        <CarouselContent
                            image="../../assets/images/cards.png"
                            text1 = "Donate,"
                            text2 = "Buy,"
                            text3 = "Get Rewards"
                        />
                    </div>
                    <div className="right-arrow" onClick={RightClick}>
                        <img src="../../assets/icons/carousel-right.svg"></img>
                    </div>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div className="carousel-container">
                    <div className="carousel-content">
                        <CarouselContent
                            image="../../assets/images/cards.png"
                            text1 = "Donate,"
                            text2 = "Buy,"
                            text3 = "Get Rewards"
                        />
                    </div>
                    <div className="right-arrow-mobile" onClick={RightClick}>
                        <img src="../../assets/icons/right-arrow-mobile.svg"></img>
                    </div>
                </div>
            </>
        )
    }
    
    
    
    
}

export default Carousel;