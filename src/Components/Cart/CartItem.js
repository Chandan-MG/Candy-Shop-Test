import React from "react";
import './CartItem.css';

const CartItem = (props) =>{

    return(
        <div className="cart-item">
            <div className="cart-container">
                    <span className="name">{props.name}</span>
            
                    <span className="price">{props.price}</span>
            </div>
            <div className="cart-container">
                <div className="total">
                    <span>Total : </span> 
                    <span>0000</span>
                </div>
            </div>
            <div className="cart-container">
                 <div className="cartlist-btn">
                    <button onClick={props.onClose}>Cancel</button>
                    <button >Order</button>
                 </div>
             </div>
        </div>
    )
}

export default CartItem;