import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserChallenges, setActiveChallenge } from "../actions";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

class UserChallengeList extends Component {
  componentDidMount() {
    this.props.fetchUserChallenges(this.props.userId);
  }

  handleClick = (challengeId) => (e) => {
    this.props.setActiveChallenge(challengeId);
  };

  render() {
    return (
      <div>
        <Menu vertical>
          <Dropdown item text="Your challenges">
            <Dropdown.Menu>
              {this.props.challenges.map((challenge) => {
                return (
                  <Dropdown.Item
                    key={challenge.id}
                    onClick={this.handleClick(challenge.id)}
                    as={Link}
                    to="/"
                  >
                    {challenge.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const user_challenges = Object.values(state.challenges);
  const user_challenges_sorted = user_challenges.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return {
    challenges: user_challenges_sorted,
  };
};

export default connect(mapStateToProps, {
  fetchUserChallenges,
  setActiveChallenge,
})(UserChallengeList);
