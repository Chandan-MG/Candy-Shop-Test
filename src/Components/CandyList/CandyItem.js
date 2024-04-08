import React from "react";
import './CandyItem.css';

const CandyItem = (props) => {
    

    const listSubmitHandler = async(event) => {
        event.preventDefault();
        const formData = {
            name: props.name,
            description: props.description,
            price: props.price
        };
        // props.onAddToCart(formData);
        const response = await fetch(
            `https://crudcrud.com/api/eb09af7a554f437ba458dfc6d04d7281/cart`,
            {
              method: "POST",
              body: JSON.stringify(formData),
              headers: {
                "Content-Type": "application/json",
              },
            }
        );
    };

    return(
        <form onSubmit={listSubmitHandler}>
            <div className="item-card">
                <div className="candylistitem">
                    <span value={props.name}>{props.name}</span>
                </div>
                <div className="candylistitem">
                    <span value={props.description}>{props.description}</span>
                </div>
                <div className="candylistitem">
                    <span value={props.price}>{props.price}</span>
                </div>
                <div  className="candylistitem">
                    <button type="submit">Buy 1</button>
                </div>
                <div className="candylistitem">
                    <button type="submit">Buy 2</button>
                </div>
                <div className="candylistitem">
                    <button type="submit">Buy 3</button>
                </div>
            </div>
        </form>
    )
}

export default CandyItem;