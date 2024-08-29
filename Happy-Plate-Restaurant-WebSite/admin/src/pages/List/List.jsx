import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

//for list items

const List = ({url}) => {

  const [list, setList] = useState([]);

  // Fetch the list of food items from the server
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data.data)
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch data");
      }
    } catch (error) {
      toast.error("An error occurred while fetching data");
    }
  };

  // Remove a food item by its ID
  const foodRemove = async (foodId) => {
    try {
      await axios.post(`${url}/api/food/remove`, {id: foodId });
      await fetchList();
     
        toast.success("Item successfully removed");
        
      // Refresh the list after removal
    } catch (error) {
      toast.error("Failed to remove the item");
    }
  };

  useEffect(() => {
    // Initialize the fetch when the component mounts
    fetchList(); 
  }, []);

  return (
    <div className='list'>
      <div className="listTable">
        <div className="listTableFormat title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item) => (
          <div key={item._id} className="listTableFormat">
            <img className='listImg' src={`${url}/images/${item.Image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>Rs. {item.price}</p>
            <p onClick={() => foodRemove(item._id)} className='action'>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
