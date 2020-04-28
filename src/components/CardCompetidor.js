import React from "react";
import ItemObjetivo from "./ItemObjetivo";
import ButtonAdicionarObjetivo from "./ButtonAdicionarObjetivo";

class CardCompetidor extends React.Component {
  handleNovoObjetivo = (novoObjetivo) => {
    this.props.onNovoObjetivo(novoObjetivo);
  };

  render() {
    return (
      <div>
        <h3>{this.props.nomeCompetidor}</h3>
        <ul>
          {this.props.listaObjetivos.map((item) => {
            return <ItemObjetivo itemName={item} />;
          })}
        </ul>
        <ButtonAdicionarObjetivo onFormSubmit={this.handleNovoObjetivo} />
      </div>
    );
  }
}

export default CardCompetidor;
