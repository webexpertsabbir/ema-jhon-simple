import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart)


    const handelReviewItem = (id) => {
        // console.log(id)
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='product'>
            <div className='oders-container'>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handelReviewItem={handelReviewItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No add product</h2>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Order;