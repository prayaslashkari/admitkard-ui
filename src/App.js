import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import LoginForm from './components/loginForm';

import Otp from './components/otp';
import Welcome from './components/welcome';


class App extends Component {

  render() { 
    return (
      <React.Fragment>
      <Switch>
        <Route exact path="/">
          <LoginForm/>
          
          </Route>

        <Route path="/otp">
          <Otp/>
        </Route>

        <Route path="/welcome">
          <Welcome/>
        </Route>
      
      </Switch>
      </React.Fragment>
      );
  }
}
 
export default App;

