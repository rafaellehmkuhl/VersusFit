import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import ChallengeStack from "./ChallengesStack";

class Home extends Component {
  renderChallenge() {
    if (this.props.activeChallenge) {
      return <ChallengeStack challenge={this.props.activeChallenge} />;
    } else {
      return (
        <Container style={{ paddingTop: "5em", paddingBottom: "5em" }} text>
          Pick a challenge at the top or create a new challenge with your
          friends!
        </Container>
      );
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
