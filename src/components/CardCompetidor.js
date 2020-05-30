import React from "react";
import ItemObjetivo from "./ItemObjetivo";
import ButtonAdicionarObjetivo from "./ButtonAdicionarObjetivo";
import { Segment, Divider, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchChallengerGoals, addChallengerGoal } from "../actions";

class CardCompetidor extends React.Component {
  componentDidMount() {
    this.props.fetchChallengerGoals(this.props.nomeCompetidor);
  }

  renderGoalsList() {
    return this.props.goals.map((goal) => {
      return (
        <ItemObjetivo
          key={goal.id}
          goal_id={goal.id}
          challengerName={this.props.nomeCompetidor}
          onObjetivoChange={this.changeObjetivo}
          onObjetivoDelete={this.deleteObjetivo}
        />
      );
    });
  }

  postNewObjetivo = (goal_tarefa) => {
    console.log(goal_tarefa);
    this.props.addChallengerGoal(goal_tarefa, this.props.nomeCompetidor);
  };

  };

  render() {
    return (
      <div>
        <Segment attached="top" textAlign="center">
          {this.props.nomeCompetidor}
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
  if (ownProps.nomeCompetidor in state.goals) {
    return { goals: state.goals[ownProps.nomeCompetidor] };
  }

  return { goals: [] };
};

export default connect(mapStateToProps, {
  fetchChallengerGoals,
  addChallengerGoal,
})(CardCompetidor);
