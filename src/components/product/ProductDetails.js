import React, { Component } from 'react'


const ProductDetails = (props) => {
    
    return (
        <div >
            Product ID: {props.match.params.id}
        </div>
    )
    
}

export default ProductDetails;