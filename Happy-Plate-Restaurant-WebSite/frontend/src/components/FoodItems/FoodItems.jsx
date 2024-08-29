import React, { useContext } from 'react';
import './FoodItems.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItems = ({ id, name, price, description, image }) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='foodContainer'>
    <div className='foodItems'>
      <div className='foodItemsImgContainer'>
        <img className='foodItemImg' src={image} alt='Food Item' />

        {!cartItems[id] ? (
          <img
            className='plusSign'
            // add  a item to cart
            onClick={() => addToCart(id)} 
            src={assets.plusSign}
            alt='Add Food'
          />
        ) : (
          <div className='addFoodItem'>
            <img className='plusBtn'
            // add more than one from same item
              onClick={() => addToCart(id)} 
              src={assets.plusBtn}
              alt='Add Food'
            />
            {/* //manage item removes from cart */}
            <p>{cartItems[id]}</p>  
            <img className='minusBtn'
              onClick={() => removeFromCart(id)}
              src={assets.minusBtn}
              alt='Remove Food'
            />
          </div>
        )}
      </div>
      <div className='foodItemDetails'>
      <p style={{ fontWeight: 'bold',color: '#EB6641' }} className='foodItemName'>{name}</p>
    <p style={{ fontWeight: 'bold', color: '#05782C',fontSize:'14px' }} className='foodDescription'>{description}</p>
    <p style={{ color: '#06D001' }} className='foodPrice'>Rs: {price}</p>
      </div>
    </div>
    </div>
  );
};

export default FoodItems;
