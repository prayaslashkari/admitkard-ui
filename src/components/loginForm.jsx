import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import './loginForm.css'

class LoginForm extends Component {

  render() { 
    return ( 

      <div className="main">
      <img className = "image" src="https://d3toi7c4ip49i3.cloudfront.net/img/img-2/logo.png" alt=""/>
      <p className="sign" align="center">Sign in</p>
      <form className="form1">
        <input className="un " type="text" align="center" placeholder="+91 XXXXXXXXX"/>
        <Link to = "/otp" className="submit" align="center" >Sign in</Link>    
      </form>
      </div>

     );
  }
}
 
export default LoginForm;