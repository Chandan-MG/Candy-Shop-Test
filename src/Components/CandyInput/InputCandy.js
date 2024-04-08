import React, { useState } from "react";

import './InputCandy.css';


const InputCandy = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputprice, setInputPrice] = useState('');

    const nameChangeHandler=(event)=>{
        setInputName(event.target.value);
    }
    const descriptionChangeHandler=(event)=>{
        setInputDescription(event.target.value);
    }
    const priceChangeHandler=(event)=>{
        setInputPrice(event.target.value);
    }

    const formSubmitHandler=async(event)=>{
        event.preventDefault();

        const candyData = {
            name: inputName,
            description: inputDescription,
            price: inputprice
        }

        // props.onSaveCandyData(candyData);
        // console.log(candyData);
        const response = await fetch(
            `https://crudcrud.com/api/eb09af7a554f437ba458dfc6d04d7281/candy`,
            {
              method: "POST",
              body: JSON.stringify(candyData),
              headers: {
                "Content-Type": "application/json",
              },
            }
        );
        
        setInputName('');
        setInputDescription('');
        setInputPrice('');
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <div className="candy-card">
                <div className="candy-input">
                    <div className="box">
                        <h3>Candy Name</h3>
                    </div>
                    <div className="box">
                        <input type="text" value={inputName} onChange={nameChangeHandler}/>
                    </div>
                </div>
                <div className="candy-input">
                    <div className="box">
                        <h3>Description</h3>
                    </div>
                    <div className="box">
                        <input type="text" value={inputDescription} onChange={descriptionChangeHandler} />
                    </div>
                </div>
                <div className="candy-input">
                    <div className="box">
                        <h3>Price</h3>
                    </div>
                    <div className="box">
                        <input type="number" value={inputprice} onChange={priceChangeHandler}/>
                    </div>
                </div>
                
                <div className="button">
                    <button type="submit">Add</button>
                </div>
            </div>
        </form>
    )
}

export default InputCandy;