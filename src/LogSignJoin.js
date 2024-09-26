import React from 'react'
import './LogSignJoin.css'
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

function LogSignJoin() {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
      setIsSignUp(!isSignUp);
    };


  return (
    <div>
     <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <LoginForm />
        <SignUpForm />
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>If you already have an account, just log in.</p>
            <button className="ghost" onClick={toggleForm}>Log in</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us.</p>
            <button className="ghost" onClick={toggleForm}>Sign up</button>
          </div>
        </div>
      </div>
    </div> 
    </div>
  )
}

export default LogSignJoin
