import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchUserChallenges } from "../actions";
import CardCompetidor from "./CardCompetidor";

class ChallengerStack extends React.Component {
  componentDidMount() {
    this.props.fetchUserChallenges(this.props.user_id);
  }

  renderChallengesList() {
    return this.props.challenges.map((challenge) => {
      return (
        <Grid.Row>
          <CardCompetidor
            challenge_name={challenge.name}
            challenge_id={challenge.id}
            user_id={this.props.user_id}
          />
        </Grid.Row>
      );
    });
  }

  render() {
    const numChallenges = this.props.challenges.length;
    return (
      <div>
        <Grid rows={numChallenges} centered divided>
          {this.renderChallengesList()}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const user_challenges = Object.values(state.challenges);
  const user_challenges_sorted = user_challenges.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return { challenges: user_challenges_sorted };
};

export default connect(mapStateToProps, {
  fetchUserChallenges,
})(ChallengerStack);
