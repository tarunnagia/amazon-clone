import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal"
import "./Checkout.css";
function Checkout() {
    const [{ cart }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout_ad" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Gateway/July/One_audio_1500x300.jpg" 
                    alt=""
                    />
                    {cart?.length===0 ? (
                        <div className="empty__basket"> 
                            <img className="empty__basketImage" src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt=""/>
                            <div className="empty__basketText">
                            <h2 className="checkout__title1">Your Amazon Basket is empty</h2>
                            <p>you have no items in your basket. To buy one or more items, click "Add To Cart" next to the item </p>
                            </div>
                        </div>
                    ):( <div>
                        <h2 className="checkout__title2">Shopping Cart</h2>
                        {/* List of all the Products for checkout */}
                        {cart.map(item=> (
                            <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            />
                        ))}
                        </div>
                    )}
                </div>
                {cart.length>0 &&(
                    <div className="checkout__left">
                        <Subtotal/>
                    </div>
                )}
        </div>
    );
}

export default Checkout
