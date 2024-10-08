import React, { useState } from 'react'
import './Loginpop.css'
import { assets } from '../../assets/assets'

const Loginpop = ({setShowLogin}) => {

const [currState,setCurrState]=useState("Sign Up")

  return (
    <div className='login-popup'>
       <form action="" className="login-popup-container">
          <div className="login-popup-title">
            <h2> {currState} </h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>

          <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type='text' placeholder='Your Name' required />} 
              
              <input type='email' placeholder='Your Email' required/>
              <input type='password' placeholder='Password' required/>
          </div>
          <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
          <div className='login-popup-condition'>
            <input type='checkbox' required />
            <p>I agree to the terms of use & privacy policy</p>
          </div>
          {currState==="Login"?
          <p>Create a New account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
          <p>Already heve an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
       </form>
    </div>
  )
}

export default Loginpop;