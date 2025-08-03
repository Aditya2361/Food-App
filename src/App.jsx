import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/home'
import Cart from './Pages/cart/cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setshowLogin] =  useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setshowLogin}/>:<></>}
      <div className='app'>
        <Navbar setshowLogin={setshowLogin}/>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          
        </Routes>
        <Footer/>
        
      </div>
    </>
  )
}

export default App
