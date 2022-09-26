import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])


    const handelAddToCart = (product) =>{
        // console.log(product)
        const newCart = [...cart, product];
        // console.log(newCart)
        setCart(newCart)
    }

    return (
        <div className='product'>
            <div className="product-container">
               {
                    products.map(product => <Product
                        key = {product.id}
                        product = {product}
                        handelAddToCart={handelAddToCart}
                       
                       
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected item: {cart.length}</h2>
            </div>
        </div>
    );
};

export default Shop;