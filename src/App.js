import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from "./components/Login";
import logo from './communityBank.svg';
import Profile from "./components/Profile"
import { Route } from "react-router-dom"

class App extends Component {
  constructor(){
    super()

    this.state = {
      user: null,
    }
  }
  componentDidMount(){
    axios.get('/api/profile').then(response => {
      this.setState({user: response.data.user})
    })
  }

  login(){

    const callbackUri = encodeURIComponent(window.location.origin + '/auth/callback');
    window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${callbackUri}`;
  }
  render() {
    return (
      <div className="app">
      
        <Route path='/profile' component={Profile} />
      
      <div className="logo-button-container">
        <img src={logo} className="logo" alt="logo"/>

          <Login login={this.login} />
      </div>
      </div>
    );
  }
}

export default App;
