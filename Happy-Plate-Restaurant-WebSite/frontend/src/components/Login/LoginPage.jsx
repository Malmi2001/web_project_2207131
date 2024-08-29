import React, { useContext, useState } from 'react';
import './LoginPage.css';
import assets from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPage = ({ setLogin }) => {
    // Access context variables
  const { url, setToken } = useContext(StoreContext);

    // State for login/registration form
  const [currentState, setCurrentState] = useState('Login');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });
//To handle inputs
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
//To handle login/registration submission
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === 'Login') {
      newUrl += '/api/user/login';
    } else {
      newUrl += '/api/user/register'; 
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      setLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
     // Render the login/registration form
    <div className="login">
      <form onSubmit={onLogin} id="loginForm" name="loginForm" className="loginContainer">
        <div className="loginTitle">
          <h2>{currentState}</h2>
          <img onClick={() => setLogin(false)} src={assets.close} className="closeImg" alt="Close" />
        </div>
        <div className="loginInputs">
          {currentState === 'Sign Up' && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Enter Your Name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button type="submit" className="loginBtn">
          {currentState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>
        <div className="loginConditions">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I have read and agree to the Terms and Conditions</label>
        </div>
        {currentState === 'Login' ? (
          <p>
            Don't Have an Account? <span onClick={() => setCurrentState('Sign Up')}>Create Account</span>
          </p>
        ) : (
          <p>
            Already Have an Account? <span onClick={() => setCurrentState('Login')}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
