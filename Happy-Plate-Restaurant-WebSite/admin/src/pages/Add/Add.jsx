import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets';
import './Add.css';
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  // State for image upload
  const [image, setImage] = useState(false);

  // State for form data
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salads",
  });

  //To  handle the input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };
useEffect(()=>{
console.log(data)
},[data])

  // To handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("Image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Pizza",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Render the form
  return (
    <div className="add">
      <form className="listForm" onSubmit={onSubmitHandler}>
     <div className="addUploadImgTopic listForm">
      <p>Upload Image</p>
      <label htmlFor='image'>
        <img className='uploadImg' src={image?URL.createObjectURL(image):assets.upload} alt="" />
      </label>
      <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden required/>
     </div>
     <div className="addFoodName">
    <p>Food Name</p>
      <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Enter food name here' required/>
     </div>
     <div className="addFoodDescription">
      <p>Food description</p>
      <textarea onChange={onChangeHandler} value={data.description} name='description' rows="10" placeholder='Add the food description here' required></textarea>
     </div>
 <div className='addFoodCategory listForm'>
<p>Food Category</p>
<select onChange={onChangeHandler}  name='foodCategory'>
  <option value="Salads">Salads</option>
  <option value="Rice">Rice</option>
  <option value="Noodles">Noodles</option>
  <option value="Pasta">Pasta</option>
  <option value="Soup">Soup</option>
  <option value="Burger">Burger</option>
  <option value="Pizza">Pizza</option>
  <option value="Deserts">Deserts</option>
</select>

 </div>
 <div className="addPrice listForm">
<p>Food Price</p>
<input onChange={onChangeHandler}  value={data.price} type='Number'name='price' placeholder='Rs.4000'/>
 </div>

        <button className="addBtn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
