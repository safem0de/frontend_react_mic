import React, { Component } from "react";

class Registration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      empNumber: '',
      password: '',
      confirmPassword: ''
    };
  }

  click_button = () => {
    console.log(this.state);
    if (this.state.password === this.state.confirmPassword) {
      console.log('password OK');
    } else {
      console.log('password Mistake');
    }
  }

  render() {
    return <div className="register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Register a new membership</p>
            {/* <form action="../../index.html" method="post"> */}
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username"
                  value={this.state.username}
                  onChange={(e) => {
                    this.setState({ username: e.target.value });
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Employee No."
                  value={this.state.empNumber}
                  onChange={(e) => {
                    this.setState({ empNumber: e.target.value });
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password"
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Retype password"
                  value={this.state.confirmPassword}
                  onChange={(e) => {
                    this.setState({ confirmPassword: e.target.value });
                  }}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <a href="/login" className="Nav-Link">Go to Login</a>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block"
                    onClick={(e) => {
                      e.preventDefault();
                      this.click_button();
                    }}
                  >Register</button>
                </div>
              </div>
            {/* </form> */}
            <div className="social-auth-links text-center">
              {/* <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" />
                Sign up using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" />
                Sign up using Google+
              </a> */}
            </div>
            {/* <a href="login.html" className="text-center">I already have a membership</a> */}
          </div>
        </div>
      </div>
      <div id="torrent-scanner-popup" style={{ display: 'none' }} />
    </div>
      ;
  }
}

export default Registration;
