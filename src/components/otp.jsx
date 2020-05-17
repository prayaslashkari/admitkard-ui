import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import './loginForm.css'


const otp = "1234"

class Otp extends Component {
  state = { 
    number : {}, 
    pin : 0,
   }

   handleEvent = (event) =>
   {
    
    this.setState({pin : event.target.value})


   /*  
 */
}

    handleclick = () =>
    {
        if(this.state.pin === otp)
        {
            toast.success('Successfully Logged IN!');
        }
         else toast.warn('Wrong OTP');
    }

  render() { 
    return ( 
      
      <div className="main">
      <img className = "image" src="https://d3toi7c4ip49i3.cloudfront.net/img/img-2/logo.png" alt=""/>
      <p className="sign" align="center">Enter the OTP</p>
      <form className="form1">
        <input className="un " type="text" align="center" placeholder="1234" onChange={(event)=>this.handleEvent(event)}/>
        <Link to = "/Welcome" className="submit" align="center" onClick= {this.handleclick} >Submit the OTP</Link>    
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </div>

     );
  }
}
 
export default Otp;