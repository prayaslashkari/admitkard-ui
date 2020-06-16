import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {useState} from 'react';
import './loginForm.css'

const LoginForm = () => {

  const [value, setValue] = useState()

  return ( 
    <div className="main">
      <img className = "image" src="https://d3toi7c4ip49i3.cloudfront.net/img/img-2/logo.png" alt=""/>
      <p className="sign" align="center">Sign in</p>
      <form className="form1">
        
        <input className="un " type="text" align="center" placeholder="+91 XXXXXXXXXX"/>
        <Link to = "/otp" className="submit" align="center" >Sign in</Link>    
      </form>
      </div>
   );
}
 
export default LoginForm;
