import React, { Component } from 'react';
import "./welcome.scss";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    componentDidMount(){
        toast.success('Successfully Logged IN!');

    }
    
    render() { 

        return ( 
            <div id="login-container">
                <div class="profile-img"></div>
                <h1>
                    Prayas
                </h1>
                    <div class="description">
                        Prayas is a front end web developer based in Noida. He has professional experience in UX/UI Design and worked as an graphic designer in the past. He working his way into the front end web development.
                       
                    </div>

                    <div class="social">
                        <a href="https://github.com/callmemonky">GitHub</a>
                        <a href="https://www.linkedin.com/in/prayaslashkari/">LinkedIn</a>
                        <a href="https://www.behance.net/lazyprayas">Behance</a>
                    </div>
                
                <button class= "button">Hire Me</button>
                <Link to="/"><button class= "buttonlink">Back to the App</button></Link>

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
 
export default Welcome;