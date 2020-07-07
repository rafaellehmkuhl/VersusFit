import React from "react";
import GoalItem from "./GoalItem";
import NewGoalButton from "./NewGoalButton";
import { Segment, Table, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchChallengerGoals } from "../actions";
import goalsAPI from "../apis/goalsAPI";

class CardCompetidor extends React.Component {
  state = { user_name: "" };
  componentDidMount() {
    this.props.fetchChallengerGoals(this.props.user_id);
    this.getUserNames();
  }

  getUserNames = async () => {
    const response = await goalsAPI.get(`/user/${this.props.user_id}`); //TODO: Move to actions
    this.setState({
      user_name: response.data.name,
    });
  };

  renderGoalsList() {
    return this.props.goals.map((goal) => {
      return <GoalItem key={goal.id} goal={goal} />;
    });
  }

  render() {
    return (
      <div>
        {/* <Segment attached> */}
        <Header as="h4" attached="top" block>
          {this.state.user_name}
        </Header>
        <Table attached size="small" basic celled unstackable compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Objetivo</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">D</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">S</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">T</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Q</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Q</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">S</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">S</Table.HeaderCell>
              <Table.HeaderCell textAlign="center"></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.renderGoalsList()}</Table.Body>
        </Table>
        <Segment attached>
          <NewGoalButton
            user_id={this.props.user_id}
            challenge_id={this.props.challenge_id}
          />
        </Segment>
        {/* </Segment> */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const challenge_user_goals = Object.values(state.goals).filter(
    (goal) =>
      goal.user_id === ownProps.user_id &&
      goal.challenge_id === ownProps.challenge_id
  );

  const user_goals_sorted = challenge_user_goals.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return { goals: user_goals_sorted };
};

export default connect(mapStateToProps, {
  fetchChallengerGoals,
})(CardCompetidor);
