import React from "react";

function ProductDetailImage(props) {
    return (
        <div className="product-detail-image" style={{backgroundImage: "url(" + props.image + ")"}}></div>
    )
}

export default ProductDetailImage;