import React from "react";
import ItemObjetivo from "./ItemObjetivo";
import ButtonAdicionarObjetivo from "./ButtonAdicionarObjetivo";
import { Segment, Divider, Container } from "semantic-ui-react";
import axios from "axios";

const API_URL = "https://projeto-quarentena-verao-api.herokuapp.com/";

class CardCompetidor extends React.Component {
  state = {
    goals: [],
  };

  componentDidMount() {
    this.updateObjetivosList();
  }

  updateObjetivosList = () => {
    axios.get(`${API_URL}${this.props.nomeCompetidor}`).then((res) => {
      this.setState({
        goals: res.data,
      });
    });
  };

  postNewObjetivo = (goalAction) => {
    var goal = {
      tarefa: goalAction,
      competidor: this.props.nomeCompetidor,
    };
    axios.post(`${API_URL}`, goal).then((res) => {
      this.updateObjetivosList();
    });
  };

  changeObjetivo = (item, item_id) => {
    axios.patch(`${API_URL}${item_id}`, item).then((res) => {
      this.updateObjetivosList();
    });
  };

  deleteObjetivo = (item_id) => {
    axios.delete(`${API_URL}${item_id}`).then((res) => {
      this.updateObjetivosList();
    });
  };

  render() {
    return (
      <Container>
        <Segment attached="top" textAlign="center">
          {this.props.nomeCompetidor}
        </Segment>
        {this.state.goals.map((item) => {
          return (
            <ItemObjetivo
              key={item.id}
              item={item}
              onObjetivoChange={this.changeObjetivo}
              onObjetivoDelete={this.deleteObjetivo}
            />
          );
        })}
        <Divider />
        <ButtonAdicionarObjetivo onFormSubmit={this.postNewObjetivo} />
      </Container>
    );
  }
}

export default CardCompetidor;
