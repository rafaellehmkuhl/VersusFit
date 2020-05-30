import React from "react";
import GoalItem from "./GoalItem";
import ButtonAdicionarObjetivo from "./ButtonAdicionarObjetivo";
import { Segment, Divider, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchChallengerGoals, addChallengerGoal } from "../actions";

class CardCompetidor extends React.Component {
  componentDidMount() {
    this.props.fetchChallengerGoals(this.props.user_id);
  }

  renderGoalsList() {
    return this.props.goals.map((goal) => {
      return (
        <GoalItem
          key={goal.id}
          goal_id={goal.id}
          challengerName={this.props.user_id}
          onObjetivoChange={this.changeObjetivo}
          onObjetivoDelete={this.deleteObjetivo}
        />
      );
    });
  }

  postNewObjetivo = (goal_name) => {
    var goal = {
      name: goal_name,
      repetitions: 3,
    };
    this.props.addChallengerGoal(goal, this.props.user_id);
  };

  render() {
    return (
      <div>
        <Segment attached="top" textAlign="center">
          {this.props.user_id}
        </Segment>
        <Table celled unstackable compact>
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

        <Divider />
        <ButtonAdicionarObjetivo onFormSubmit={this.postNewObjetivo} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.user_id in state.goals) {
    const goals_sorted = state.goals[ownProps.user_id].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return { goals: goals_sorted };
  }

  return { goals: [] };
};

export default connect(mapStateToProps, {
  fetchChallengerGoals,
  addChallengerGoal,
})(CardCompetidor);
