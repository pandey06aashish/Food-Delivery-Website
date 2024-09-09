import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useActionData } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/footer'
import Loginpop from './components/Loginpopup/Loginpop'


const App = () => {
  const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    {
      showLogin ? <Loginpop setShowLogin={setShowLogin}/>:<></>
    }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
   <Footer/>
   </>
  )
}

export default App