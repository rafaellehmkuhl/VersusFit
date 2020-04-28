import React from "react";
import ItemObjetivo from "./ItemObjetivo";

class CardCompetidor extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.nomeCompetidor}</h3>
        <ul>
          {this.props.listaObjetivos.map((item) => {
            return <ItemObjetivo itemName={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default CardCompetidor;
