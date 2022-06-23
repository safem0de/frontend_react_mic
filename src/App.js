import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from './component/home/home';
import Login from './component/log-in/log-in';
import Register from './component/registration/registration';
import User from './component/user/user';

import Header from './component/header/header'
import Footer from './component/footer/footer'

import { key } from './constance/constance';

const IsLogin = () => {
  //return true if === YES
  return localStorage.getItem(key.LOGIN_PASSED) === 'yes';
};

export default class App extends Component {

  redirectToLogin = () => {
    //ถ้า return error ให้ไปที่ login
    return <Redirect to="/login" />;
  };

  render() {
    return (
      <Router>
        <div>
          {IsLogin() && <Header />}
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/user" component={User}/>

            <Route exact={true} path="/" component={this.redirectToLogin} />
            <Route exact={true} path="*" component={this.redirectToLogin} />
          </Switch>
          {IsLogin() && <Footer/>}
        </div>
      </Router>
    )
  }
}

