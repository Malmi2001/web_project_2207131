import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Foods from '../../components/Foods/Foods';
const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>

        <Header></Header>
         <Menu category={category} setCategory={setCategory}></Menu>
         <Foods category={category}></Foods>
    </div>
  )
}

export default Home;