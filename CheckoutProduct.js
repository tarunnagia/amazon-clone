import React from 'react'
import { useStateValue } from './StateProvider';
import "./CheckoutProduct.css";

function CheckoutProduct({id, title, image, price, rating}) {
    const [{ cart }, dispatch] =useStateValue();
    const removeFromCart =()=>{
        //remove item from Cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id : id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__Image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <strong>₹</strong>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <span role="img" aria-label="star">⭐</span>
                    ))}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
