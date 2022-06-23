import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <b>hello react</b>
        <div className="float-right d-none d-sm-inline-block">
          <b>Version 1.0.0</b>
        </div>
      </footer>
    );
  }
}
export default Footer;