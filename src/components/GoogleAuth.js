import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "679329796113-3se7g6n7gl2766tc120cqmoghcu8nep1.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const g_id = this.auth.currentUser.get().getId();
      const name = this.auth.currentUser.get().getBasicProfile().getGivenName();
      this.props.signIn(g_id, name);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <Button color="google plus" onClick={this.onSignOutClick}>
          <Icon name="google plus" />
          Sign out
        </Button>
      );
    } else {
      return (
        <Button color="google plus" onClick={this.onSignInClick}>
          <Icon name="google plus" />
          Sign in with Google
        </Button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
