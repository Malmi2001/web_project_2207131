import NavBar from './components/navBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import { useState } from 'react';
import Login from './components/Login/LoginPage';

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      {login && <Login setLogin={setLogin} />}
      <div className='app'>
        <NavBar setLogin={setLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
   
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
