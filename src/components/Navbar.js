import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import GoogleAuth from "./GoogleAuth";
import UserChallengeList from "./UserChallengeList";
import { connect } from "react-redux";

class Navbar extends Component {
  renderUserChallengesList() {
    if (this.props.isSignedIn) {
      return <UserChallengeList userId={this.props.userId} />;
    } else {
      return <Menu.Item>Loading challenges</Menu.Item>;
    }
  }

  render() {
    return (
      <div>
        <Menu>
          {this.renderUserChallengesList()}
          <Link to="/create-challenge">
            <Menu.Item name="NewChallenge" />
          </Link>
          <Menu.Menu position="right">
            <GoogleAuth />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, {})(Navbar);
