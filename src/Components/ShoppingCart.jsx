import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart,clearCart,increaseItemQuantity,decreaseItemQuantity } from './CartSlice'; //action creators



const ShoppingCart = () => {

    const dispatch = useDispatch();
    const cartItems =useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total,item) => total + item.price * item.quantity, 0 );
    // event handlers 
    const handleRemoveItem = itemID => {
        dispatch(removeItemFromCart(itemID));
    };

    const handleClearCart = () => {
        dispatch(clearCart());

    };

    const handleIncreaseQuantity = itemID => {
        dispatch(increaseItemQuantity(itemID));
    };

    const handleDecreaseQuantity = itemID => {
        dispatch(decreaseItemQuantity(itemID));
    };


  return (
    <>
      <div className="shopping-cart">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span> {item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div>{totalAmount ? <div>'The total amount is {totalAmount}</div> : ''}</div>
    </>
  );
};

export default ShoppingCart;
