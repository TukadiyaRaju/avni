import React from "react";

function SearchBar() {
    let darkmode = localStorage.getItem("darkmode");
    
    if(darkmode === "true") {
        return(
            <div className="search-bar dark">
                <img src="../../assets/icons/search.svg"></img>
                <input placeholder="Search"></input>
            </div>
        )
    } else {
        return(
            <div className="search-bar">
                <img src="../../assets/icons/search.svg"></img>
                <input placeholder="Search"></input>
            </div>
        )
    }
}

export default SearchBar;