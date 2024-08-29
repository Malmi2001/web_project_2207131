import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  // Access cart items and other context variables
  const { cartItems, foodList, removeFromCart, getTotal } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cartItems">
        <div className="cartItemsTitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className='cartItemsTitle cartItemsItem'>
                  <img className='cartItemImage' src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>Rs.{item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>Rs.{item.price * cartItems[item.id]}</p>
                  <p onClick={() => removeFromCart(item.id)} className='close'>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cartBottom">
        <div className="cartTotalBill">
          <h2>Your Order Billing Details</h2>
          <div>
            <div className="totalBillDetails">
              <p>Sub Total:</p>
              <p>Rs.{getTotal()}</p>
            </div>
            <hr />
            <div className="totalBillDetails">
              <p>Delivery Fee:</p>
              <p>Rs.{getTotal()===0?0:400}</p>
            </div>
            <hr />
            <div className="totalBillDetails">
              <p>Total:</p>
              <p>Rs.{getTotal()===0?0: getTotal() + 400}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className='cartCheckOutBtn'>Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;