import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Menu>
          <Link to="/">
            <Menu.Item name="home" />
          </Link>
          <Menu.Menu position="right">
            <Link to="/login">
              <Menu.Item name="login" />
            </Link>
            <Link to="/register">
              <Menu.Item name="register" />
            </Link>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
