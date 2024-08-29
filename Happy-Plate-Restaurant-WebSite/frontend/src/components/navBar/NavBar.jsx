import React, { useContext, useState } from 'react';
import './NavBar.css';
import assets from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const NavBar = ({ setLogin }) => {
    // State for active list item
  const [list, setList] = useState('list');
  // To access context variables
  const { getTotal,token,setToken } = useContext(StoreContext);
// Initialize the navigation
const navigate = useNavigate();
//  Handle logout
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");

  }
  return (
    <div className='navBar'>
      <Link to='/'>
           {/* link the logo to home page */}
        <img src={assets.logo1} className='logo' alt='logo' />  
      
      </Link>
      <ul className='navBarList'>
        <Link to='/' onClick={() => setList('home')} className={list === 'home' ? 'active' : ''}>
          Home
        </Link>
        <Link to='/menu' onClick={() => setList('menu')} className={list === 'menu' ? 'active' : ''}>
          Menu
        </Link>
        <Link to='/Footer' onClick={() => setList('about')} className={list === 'about' ? 'active' : ''}>
          About
        </Link>
        <Link to='/Footer' onClick={() => setList('contact')} className={list === 'contact' ? 'active' : ''}>
          Contact
        </Link>
      </ul>
      <div className='navBarIcons'>
        <img className='searchImg' src={assets.search} alt='search icon' />
        <div className='navBarCartIcon'>
          <Link to='/cart'>
            <img className='cartImg' src={assets.cart} alt='cart icon' />
          </Link>
          <div className={getTotal() ? 'activeSymbol' : ''}></div>
        </div>
        {!token?
        <button onClick={() => setLogin(true)} className='navBarButton'>Sign In</button>
:<div className='navBarProfile'>
<img className='profileImg' src={assets.profile} alt=''/>
<ul className="navProfile">
  <li>
    <img className='bagImg' src={assets.bag} alt="" />
    <p>Orders</p>
  </li>
  <hr/>
  <li onClick={logout}>
  <img className='logoutImg' src={assets.logout} alt="" />
  <p>Logout</p>
  </li>
</ul>

</div>
}
      </div>
    </div>
  );
};

export default NavBar;
