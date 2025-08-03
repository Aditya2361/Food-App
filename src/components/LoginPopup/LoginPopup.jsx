import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login")

  const togglePopup = () => {
    setShowLogin(false)
  }

  return (
    <div className='login-popup'>
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={togglePopup} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? <></> : 
          <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button className='login-popup-button' onClick={() => alert("This is just a project website. It is not connected to a database.")}>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <label>By continuing, I agree to the terms of use & privacy policy</label>
        </div>
        {currentState === "Login" 
          ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
        }
      </div>
    </div>
  )
}

export default LoginPopup
