import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Product.css'
const Product = (props) => {
// const Product = (product, handelAddToCart) => {
    // console.log(props)
    const {name, price, img, seller, ratings} = props.product;
    // const {name, price, img, seller, ratings} = product;
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-text'>
                <h3>{name}</h3>
                <h4>Price: {price} $</h4>
                <div className='seller-dts'>
                    <p><b>Sellar:</b> {seller}</p>
                    <p><b>Rating:</b> {ratings} star</p>
                </div>

                
            </div>
            <button onClick={() =>props.handelAddToCart(props.product)}>Add To Cart
            <span className='font-icon'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
            </button>
        </div>
    );
};

export default Product;