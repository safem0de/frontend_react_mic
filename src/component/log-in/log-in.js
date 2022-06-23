import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import Swal from "sweetalert2";
import { key } from "../../constance/constance";

class LogIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  click_button = async () => {
    console.log(this.state);

      let command = await httpClient.post("user/login", this.state);
      console.log(command);
      if (command.data.api_result === "ok") {

        localStorage.setItem(key.LOGIN_PASSED, 'yes');

        Swal.fire({
          icon: "success",
          title: "Welcome",
          text: "to the web-site !!!",
          showConfirmButton: false,
          timer: 1000,
        });
        window.location.replace("../home");

      } else {

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
  }

  render() {
    return <div className="login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Register a new membership</p>

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

            <div className="row">
              <div className="col-8">
                <a href="/register" className="Nav-Link">Not have Account</a>
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block"
                  onClick={(e) => {
                    e.preventDefault();
                    this.click_button();
                  }}
                >LogIn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="torrent-scanner-popup" style={{ display: 'none' }} />
    </div>;
  }
}

export default LogIn;
