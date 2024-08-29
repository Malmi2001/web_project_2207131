// NavBar for admin page
import React from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets.js'
const NavBar = () => {
  return (
    <div className='navBar'>
<img className='logo' src={assets.logo} alt="" />
{/* //admin profilePic */}
<img className='profilePic' src={assets.profilePic} alt="" /> 
    </div>
  )
}

export default NavBar;