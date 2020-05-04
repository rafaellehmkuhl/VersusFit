import React from "react";
import ItemObjetivo from "./ItemObjetivo";
import ButtonAdicionarObjetivo from "./ButtonAdicionarObjetivo";

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
      <div>
        <h3>{this.props.nomeCompetidor}</h3>
        <ul>
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
        </ul>
        <ButtonAdicionarObjetivo onFormSubmit={this.handleNovoObjetivo} />
      </div>
    );
  }
}

export default CardCompetidor;
