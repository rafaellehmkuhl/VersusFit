import React, { Component } from "react";
import { connect } from "react-redux";
import NewChallengeButton from "./NewChallengeButton";

class CreateChallenge extends Component {
  render() {
    return (
      <div>
        <NewChallengeButton userId={this.props.userId} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, {})(CreateChallenge);
