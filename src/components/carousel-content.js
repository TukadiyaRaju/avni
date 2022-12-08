import React from "react";

function CarouselContent(props){
    return(
        <>
            <img className="carousel-image" src={props.image}></img>
            <p className="carousel-text">{props.text1}</p>
            <p className="carousel-text">{props.text2}</p>
            <p className="carousel-text">{props.text3}</p>
            <div className="slide-dot-div">
                <div className="slide-dot active"></div>
                <div className="slide-dot"></div>
                <div className="slide-dot"></div>
            </div>
        </>
    )
}

export default CarouselContent