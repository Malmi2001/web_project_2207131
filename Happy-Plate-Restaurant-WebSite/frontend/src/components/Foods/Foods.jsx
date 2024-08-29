
import React, { useContext } from 'react';
import './Foods.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItems from '../FoodItems/FoodItems';

const Foods = ({ category }) => {
    // Access foodList from context
  const { foodList } = useContext(StoreContext);

  return (
    <div className='foods' id='foods'>
      <h2 className='foodHeading'>Our Dishes For You ..... </h2>
      <h5>*If you are vegetarian the vegetarian items are specified like this  ➪  **Vegetarian** </h5>
      <div className='foodsListItems'>
        {foodList.map((item, index) => {
          {console.log(category,item.category);}
          if (category === 'All' || category === item.category) {
            return (
              <FoodItems className="foodItems"
                  key={index}
                 id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
             ></FoodItems>
            );
          }
     
        })}
      </div>
    </div>
  );
};

export default Foods;
