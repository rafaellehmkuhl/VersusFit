import React, { Component } from "react";
import { connect } from "react-redux";
import ChallengeStack from "./ChallengesStack";

class Home extends Component {
  renderChallenge() {
    if (this.props.activeChallenge) {
      return <ChallengeStack challenge={this.props.activeChallenge} />;
    } else {
      return;
    }
  }
  render() {
    return <div>{this.renderChallenge()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeChallenge: state.activeChallenge,
  };
};

export default connect(mapStateToProps, {})(Home);
