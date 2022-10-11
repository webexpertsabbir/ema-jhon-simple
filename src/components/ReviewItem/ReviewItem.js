import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, handelReviewItem}) => {
    const {id, name, price, quantity, img} = product;
    return (
        <div className='raview-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details'>
                <h3>Name: {name}</h3>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div>
                <button onClick={() =>handelReviewItem(id)}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
                
            </div>
        </div>
    );
};

export default ReviewItem;