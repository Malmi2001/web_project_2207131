import React from 'react';
import './Menu.css';
import { menuList } from '../../assets/assets';
const Menu = ({category,setCategory}) => {
  return (
    <div className='menu' id='menu'>
      <h1 className='menuHead'>Explore Our Menu</h1>
      <h3 className='menuQuote'>From Our Kitchen to Your Table</h3>
    <div className='menuList'>
{menuList.map((item,index)=>{
  return(
    <div onClick={()=>
    setCategory(prev=>prev===item.menuName?"All":item.menuName)} key={index} className='listItem'>
<img 
  className={`${category === item.menuName ? "active" : ""} menuImages`} 
  src={item.menuImg} 
  alt='' 
/>
<p className='menuItemsName'>{item.menuName}</p>

    </div>
  )
})}

    </div>
    <hr className='menuHr'/>
    </div>
  )
}

export default Menu;