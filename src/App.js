
import './App.css';
import CartProvider from './Components/Context/cartProvider';
import CartButton from './Components/Cart/CartButton';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CandyList from './Components/CandyList/CandyList';
import InputCandy from './Components/CandyInput/InputCandy';

function App() {

  // const [candy, setCandy] = useState(DUMMY_CART);
  // const [cart, setCart] = useState(DUMMY_CART);
  const [ cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  // const addCandyHandler =(candy) =>{
  //   setCandy((prevCandy) => {
  //     return [...prevCandy, candy];
  //   })
  // }
  // const addCartHandler =(cart) =>{
  //   setCart((prevCart) => {
  //     return [...prevCart, cart];
  //   })
  // }
  
  return (
    <CartProvider>
      <div className="App">
        <div className='top'>
          <div className='topinput'>
            <InputCandy />
          </div>
          <div className='cart-btn'>
            <CartButton  onShow={showCartHandler} />
          </div>
        </div>
        <div>
          <CandyList/>
        </div>
        <div>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
