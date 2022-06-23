import React, { Component } from "react";
import { key } from "../../constance/constance";

class Header extends Component {
  render() {
    return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}

        <ul className="navbar-nav">
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/login" className="nav-link"
              onClick={(e) => {
                window.location.replace("../login");
                localStorage.removeItem(key.LOGIN_PASSED);
              }}>
              Log-In
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/user" className="nav-link">
              User
            </a>
          </li>
        </ul>
        <div className="input-group-append"></div>
        <ul className="navbar-nav ml-auto">
          Hello
        </ul>
        <div className="float-right d-none d-sm-inline-block">
          <button
            className="btn btn-block btn-info"
            type="button"
            onClick={(e) => {
              window.location.replace("../login");
              localStorage.removeItem(key.LOGIN_PASSED);
            }}
          >
            Log Out
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
