import React from 'react';

const Cart = ({ cartItems, incrementQuantity, decrementQuantity, deleteItem }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Items in cart</h2>
      {cartItems.map((item) => (
        <div key={item.productID} className="cart-item">
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => decrementQuantity(item.productID)}>-</button>
          <button onClick={() => incrementQuantity(item.productID)}>+</button>
          <button onClick={() => deleteItem(item.productID)}>Delete</button>
        </div>
      ))}
      <h3>Total amount: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
