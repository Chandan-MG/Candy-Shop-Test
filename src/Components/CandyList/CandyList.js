import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import CandyItem from "./CandyItem";

const CandyList = (props) => {
    const [candyListItems, setCandyListItems] = useState([]);

    useEffect(() => {
        const fetchListItems = async () => {
            try {
                const response = await fetch(`https://crudcrud.com/api/eb09af7a554f437ba458dfc6d04d7281/candy`);
                if (response.ok) {
                    const candyListItems = await response.json();
                    // Update cart context with fetched cart items
                    setCandyListItems(candyListItems);
                }
            } catch (error) {
                console.error('Error fetching:', error);
            }
        };

        fetchListItems();
    }, [candyListItems]);

    const candyList = candyListItems.map((candy) => (
        <CandyItem
            key={candy.id}
            id={candy.id}
            name={candy.name}
            description={candy.description}
            price={candy.price}
            onAddToCart={props.onAddToCart}
        />
    ))

    return(
        <section className="list">
            <Card>
                <ul>
                    {candyList}
                </ul>
            </Card>
        </section>
    )
}

export default CandyList;
