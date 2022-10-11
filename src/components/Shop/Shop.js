import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // const [products, setProduct] = useState([]);
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    // useEffect( () => {
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProduct(data))
    // },[])

    useEffect( () => {
        const storedCart = getStoreCart();
        // console.log(storedCart)
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
                // console.log(addedProduct)
            }
        }
        setCart(savedCart);
    }, [products])

    const handelAddToCart = (slectedProduct) =>{
        // console.log(product)

        let newCart = [];
        const exists = cart.find(product => product.id === slectedProduct.id);
        if(!exists){
            slectedProduct.quantity = 1;
            newCart = [...cart, slectedProduct];
        }
        else{
            
            const rest  = cart.filter(product => product.id !== slectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        // console.log(newCart)
        setCart(newCart)
        addToDb(slectedProduct.id)
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
                <Cart clearCart={clearCart} cart ={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;