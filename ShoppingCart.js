import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, deleteItem } from '../redux/actions';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Calculate totals
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Task: Total number of plants in cart
  const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0); // Task: Total cost

  const handleCheckout = () => {
    alert("Coming Soon!"); // Task: Checkout button message
  };

  if (cart.length === 0) {
    return (
      <div className="shopping-cart-page">
        <h1>Your Cart is Empty</h1>
        <Link to="/products">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="shopping-cart-page">
      <h1>Your Shopping Cart</h1>
      <p>Total Items in Cart: **{totalItems}**</p>
      <p>Total Cost: **${totalCost.toFixed(2)}**</p>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} className="cart-thumbnail" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            
            <div className="item-controls">
              {/* Task: Increase Button */}
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              
              {/* Task: Decrease Button */}
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              
              {/* Task: Delete Button */}
              <button onClick={() => dispatch(deleteItem(item.id))} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-actions">
        {/* Task: Checkout Button */}
        <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
        
        {/* Task: Continue Shopping Button */}
        <Link to="/products">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
