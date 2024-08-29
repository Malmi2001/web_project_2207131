import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { foodList } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Set state for cart items
  const [cartItems, setCartItems] = useState({});
    // API URL
const url = "http://localhost:6060"
// Set state for authentication token
const [token,setToken]=useState("");
// const [foodList,setFoodList] = useState([

// ]);



  // Add items to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  // Remove items from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  // Calculate total amount
  const getTotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = foodList.find((product) => product.id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
//to get data from the database using axios
// const fetchFoodList = async () => {
//   const response = await axios.get("http://localhost:6060/api/food/list");
//   setFoodList(response.data.data);
// }
  // Fetch data from the database using axios
useEffect(()=>{
  if (localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"));
  }
// async function loadData() {
  // await fetchFoodList();
//   if (localStorage.getItem("token")) {
//     setToken(localStorage.getItem("token"));
//   }
// }
// loadData();
},[]);

  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotal,
    // url,
    token,
    // setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
