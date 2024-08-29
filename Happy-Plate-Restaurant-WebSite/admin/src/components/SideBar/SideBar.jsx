import React from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
 
const SideBar = () => {
  return (
    <div className='sideBar'>
<div className="sideBarOptions">
    <NavLink to='/add' className="sideBarOption"> 
     {/* //for add items */}
        <img className='sideBarIcon' src={assets.plusIcon} alt=''/>
        <p>Add Items</p>
    </NavLink>
    <NavLink to='/list' className="sideBarOption">
    {/* //for view list items */}
        <img className='sideBarIcon' src={assets.oderImg} alt=''/> 
        <p>List Items</p>
    </NavLink>
    <NavLink to='/orders' className="sideBarOption">
    {/* //for look orders */}
        <img className='sideBarIcon' src={assets.oderImg} alt=''/> 
        <p>Orders</p>
    </NavLink>
</div>

    </div>
  )
}

export default SideBar;