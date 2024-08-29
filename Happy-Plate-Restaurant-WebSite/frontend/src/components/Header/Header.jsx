import React from 'react';
import './Header.css';
import SlideShow from '../SlideShow/SlideShow';
const Header = () => {
  return (
    <>
    <div className='header'>
      {/* //add slide show images */}
      <SlideShow></SlideShow>
    {/* <button className='menuBtn'>Menu</button> */}
    </div>
    <div className=' headerContent'>

<h1 className='greeting'>Welcome To Happy Plate</h1>
<p className='description'>we bring the best of local cuisine right to your doorstep.
  Whether you’re craving a hearty meal, a light snack, or a sweet treat,
   we’ve got you covered. Our mission is to deliver fresh, delicious food quickly and conveniently,
    so you can enjoy your favorite dishes without leaving the comfort of your home◡̈</p>
    </div>

</>
   
  )
}

export default Header;