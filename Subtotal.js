import React from 'react'
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from './reducer';
import {useStateValue} from "./StateProvider";
import "./Subtotal.css"
function Subtotal() {
    const [{cart}]=useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText = {(value) =>(
                    <>
                    <p>Subtotal ({cart.length} items): <strong>{value}</strong></p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a Gift</small>
                    </>
                )}
                decimalScale ={2}
                value = {getCartTotal(cart)}
                displayType= {"text"}
                thousandSeparator ={true}
                prefix = {"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
