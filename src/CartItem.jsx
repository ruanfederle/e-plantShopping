import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0; // 1️⃣ Initialize a variable total to hold the cumulative sum.
  
    cart.forEach((item) => { // 2️⃣ Iterate over the cart array.
      const quantity = item.quantity; // 3️⃣ Extract quantity.
      const cost = item.cost; // 4️⃣ Convert cost string like "$10" → 10.
      console.log(quantity, cost);
      total += quantity * cost; // 5️⃣ Multiply by quantity and add to total.
    });
  
    return total.toFixed(2); // 6️⃣ Return final total sum formatted with 2 decimals.
  };
  

  const handleContinueShopping = (e) => {
    e.preventDefault(); // Impede comportamento padrão de botão/link
    onContinueShopping(e); // Chama a função passada pelo componente pai
  };
  

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };  

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
    else {
        dispatch(removeItem(item.name));
    }

  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    let costTotal = 0;
    console.log(costTotal);
    console.log(item.cost, item.quantity);
    costTotal = item.cost * item.quantity;
    console.log(costTotal);
    return costTotal;

  };
  

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


