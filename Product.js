import React from 'react';
import './Product.css';
import {useStateValue} from "./StateProvider";
function Product({id, title, price, rating, image}) {
    const [{ cart }, dispatch] = useStateValue();
    const addToCart =() =>{
        //Add items to cart
        dispatch({
            type : "ADD_TO_CART",
            item :{
                id : id,
                title : title,
                price : price,
                rating : rating,
                image : image
            }
        })
    };
    return (
        <div className="product">
            <div className="product__info">
                {title}
                <p className="product__price">
                    <strong>₹</strong>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_)=>(
                        <span role="img" aria-label="star">⭐</span>
                    ))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
