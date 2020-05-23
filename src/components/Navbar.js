import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import GoogleAuth from "./GoogleAuth";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu>
          <Link to="/">
            <Menu.Item name="home" />
          </Link>
          <Menu.Menu position="right">
            <GoogleAuth />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
