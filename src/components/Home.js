import React, { Component } from "react";
import ChallengeStack from "./ChallengesStack";
import { connect } from "react-redux";

class Home extends Component {
  renderChallengeStack() {
    if (this.props.isSignedIn) {
      return <ChallengeStack user_id={this.props.userId} />;
    } else {
      return <div>Not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderChallengeStack()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, {})(Home);
