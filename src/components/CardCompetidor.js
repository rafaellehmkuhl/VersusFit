import React from "react";
import ItemObjetivo from "./ItemObjetivo";
import ButtonAdicionarObjetivo from "./ButtonAdicionarObjetivo";
import { Segment, Divider } from "semantic-ui-react";
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
        <ItemObjetivo
          key={item.id}
          item={item}
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
        {this.renderGoalsList()}
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
