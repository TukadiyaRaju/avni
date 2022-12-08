import React from "react";

function Category(props) {
    return(
        <div className="category-card">
            <p>{props.name}</p>
        </div>
    )
}

export default Category;