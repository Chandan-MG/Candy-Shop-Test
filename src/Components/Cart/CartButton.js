import React from "react";
import './CartButton.css';

const CartButton = (props) => {
    return(
        <button className="btn" onClick={props.onShow}>
            <span>Cart</span>
            {/* <span> ( {props.cartCount} )</span> */}
        </button>
    )
}
export default CartButton;