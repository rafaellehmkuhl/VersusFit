import React from "react";
import ItemObjetivo from "./ItemObjetivo";
import ButtonAdicionarObjetivo from "./ButtonAdicionarObjetivo";
import { Segment, Divider, Container } from "semantic-ui-react";
import axios from "axios";
import { connect } from "react-redux";
import {
  fetchChallengerGoals,
  deleteChallengerGoal,
  toggleChallengerGoal,
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

  // postNewObjetivo = (goalAction) => {
  //   var goal = {
  //     tarefa: goalAction,
  //     competidor: this.props.nomeCompetidor,
  //   };
  //   axios.post(`${API_URL}`, goal).then((res) => {
  //     this.updateObjetivosList();
  //   });
  // };

  changeObjetivo = (item_id) => {
    this.props.toggleChallengerGoal(item_id, this.props.nomeCompetidor);
  };

  deleteObjetivo = (item_id) => {
    this.props.deleteChallengerGoal(item_id, this.props.nomeCompetidor);
  };

  render() {
    return (
      <Container>
        <Segment attached="top" textAlign="center">
          {this.props.nomeCompetidor}
        </Segment>
        {this.renderGoalsList()}
        {/* <Divider /> */}
        {/* <ButtonAdicionarObjetivo onFormSubmit={this.postNewObjetivo} /> */}
      </Container>
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
})(CardCompetidor);
