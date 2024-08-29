import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add/Add'; 
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import { ToastContainer, toast } from 'react-toastify';  //Import Tostify For Notifications
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:6060"
  return (
    <div>
      <ToastContainer/>
      <NavBar />
      <hr />
      <div className="appContent">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
