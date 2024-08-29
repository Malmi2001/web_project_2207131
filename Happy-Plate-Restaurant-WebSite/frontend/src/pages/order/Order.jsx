import React, { useContext } from 'react';
import './Order.css';
import { StoreContext } from '../../context/StoreContext';

const Order = () => {
    // Access the total amount from the context
  const { getTotal } = useContext(StoreContext);

  return (
    <form className='order'>
      <div className="orderLeft">
        <p className='title'>Payment Information</p>
        <div className="detailsFields">
        <div className='fields'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Address' />
        <div className='fields'>
        <input type="text" placeholder='District' />
        <input type="text" placeholder='City' />
        </div>
        <input type="text" placeholder='Phone' />
        </div>
      </div>
      <div className="orderRight">
      <p className='title'>Delivery Information</p>
        <div className="totalBillDetails">
          <p>Sub Total:</p>
          <p>Rs.{getTotal()}</p>
        </div>
        <hr />
        <div className="totalBillDetails">
          <p>Delivery Fee:</p>
          <p>Rs.{400}</p>
        </div>
        <hr />
        <div className="totalBillDetails">
          <p>Total:</p>
          <p>Rs.{getTotal() + 400}</p>
        </div>
        <button className='paymentBtn'>Payment</button>
      </div>
    </form>
  );
};

export default Order;
