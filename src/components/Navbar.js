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
            <Menu.Item name="Home" />
          </Link>
          <Link to="/create-challenge">
            <Menu.Item name="NewChallenge" />
          </Link>
          <Link to="/que-time">
            <Menu.Item name="QueTimeFalaMandarim" />
          </Link>
          <Link to="/rafa-emily">
            <Menu.Item name="RafaEmily" />
          </Link>
          <Link to="/danilo-bia">
            <Menu.Item name="Danilo-Bia" />
          </Link>
          <Menu.Menu position="right">
            <GoogleAuth />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
