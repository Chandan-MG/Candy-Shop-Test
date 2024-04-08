
import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import CartItem from './CartItem';

const Cart = (props) => {
    const [candyCartItems, setCandyCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`https://crudcrud.com/api/eb09af7a554f437ba458dfc6d04d7281/cart`);
                if (response.ok) {
                    const candyCartItems = await response.json();
                    // Update cart context with fetched cart items
                    setCandyCartItems(candyCartItems);
                }
            } catch (error) {
                console.error('Error fetching:', error);
            }
        };

        fetchCartItems();
    }, [candyCartItems]);

    // let count= candyCartItems.length;

    const cartList = candyCartItems.map((cart) => (
      <CartItem
          key={cart.id}
          id={cart.id}
          name={cart.name}
          description={cart.description}
          price={cart.price}
          onClose={cart.onClose}
      />
  ))

  return(
      <section>
          <Card>
              <ul>
                  {cartList}
              </ul>
          </Card>
      </section>
  )
}
export default Cart;