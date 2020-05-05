import React from "react";
import ItemObjetivo from "./ItemObjetivo";
import ButtonAdicionarObjetivo from "./ButtonAdicionarObjetivo";
import { Segment, Divider, Container } from "semantic-ui-react";

class CardCompetidor extends React.Component {
  handleNovoObjetivo = (novoObjetivoTarefa) => {
    this.props.onNovoObjetivo({
      tarefa: novoObjetivoTarefa,
      competidor: this.props.nomeCompetidor,
    });
  };

  handleObjetivoChange = (item, item_id) => {
    this.props.atObjetivoChange(item, item_id);
  };

  handleObjetivoDelete = (item_id) => {
    this.props.atObjetivoDelete(item_id);
  };

  render() {
    return (
      <Container>
        <Segment attached="top" textAlign="center">
          {this.props.nomeCompetidor}
        </Segment>
        {this.props.listaObjetivos.map((item) => {
          return (
            <ItemObjetivo
              key={item.id}
              item={item}
              onObjetivoChange={this.handleObjetivoChange}
              onObjetivoDelete={this.handleObjetivoDelete}
            />
          );
        })}
        <Divider />
        <ButtonAdicionarObjetivo onFormSubmit={this.handleNovoObjetivo} />
      </Container>
    );
  }
}

export default CardCompetidor;
