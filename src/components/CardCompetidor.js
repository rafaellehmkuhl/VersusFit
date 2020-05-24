import React from "react";
// import ItemObjetivo from "./ItemObjetivo";
import ButtonAdicionarObjetivo from "./ButtonAdicionarObjetivo";
import { Segment, Divider, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  fetchChallengerGoals,
  deleteChallengerGoal,
  toggleChallengerGoal,
  addChallengerGoal,
} from "../actions";

class CardCompetidor extends React.Component {
  componentDidMount() {
    this.props.fetchChallengerGoals(this.props.nomeCompetidor);
  }

  renderGoalsList() {
    return this.props.goals.map((item) => {
      return (
        <Table.Row textAlign="center">
          <Table.Cell textAlign="left">Cal. (2/3)</Table.Cell>
          <Table.Cell>oi</Table.Cell>
          <Table.Cell>oi</Table.Cell>
          <Table.Cell>oi</Table.Cell>
          <Table.Cell>oi</Table.Cell>
          <Table.Cell>oi</Table.Cell>
          <Table.Cell>oi</Table.Cell>
          <Table.Cell>oi</Table.Cell>
        </Table.Row>

        // <ItemObjetivo
        //   key={item.id}
        //   item={item}
        //   challengerName={this.props.nomeCompetidor}
        //   onObjetivoChange={this.changeObjetivo}
        //   onObjetivoDelete={this.deleteObjetivo}
        // />
      );
    });
  }

  postNewObjetivo = (goal_tarefa) => {
    console.log(goal_tarefa);
    this.props.addChallengerGoal(goal_tarefa, this.props.nomeCompetidor);
  };

  changeObjetivo = (item_id) => {
    this.props.toggleChallengerGoal(item_id, this.props.nomeCompetidor);
  };

  deleteObjetivo = (item_id) => {
    this.props.deleteChallengerGoal(item_id, this.props.nomeCompetidor);
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
              <Table.HeaderCell textAlign="center">Dom</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Seg</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Ter</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Qua</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Qui</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Sex</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Sab</Table.HeaderCell>
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
  deleteChallengerGoal,
  toggleChallengerGoal,
  addChallengerGoal,
})(CardCompetidor);
