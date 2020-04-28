import React from "react";
import SemanaSelector from "./SemanaSelector";
import CardCompetidor from "./CardCompetidor";

class App extends React.Component {
  state = {
    listaCompetidor1: [
      "Calistenia",
      "Corrida",
      "Salada",
      "Calistenia",
      "Corrida",
      "Salada",
    ],
    listaCompetidor2: [
      "Corrida",
      "Corrida",
      "Ginastica",
      "Ginastica",
      "Meatless",
    ],
  };

  adicionaNovoObjetivoC1 = (novoObjetivo) => {
    this.setState((previousState) => ({
      listaCompetidor1: [...previousState.listaCompetidor1, novoObjetivo],
    }));
  };

  adicionaNovoObjetivoC2 = (novoObjetivo) => {
    this.setState((previousState) => ({
      listaCompetidor2: [...previousState.listaCompetidor2, novoObjetivo],
    }));
  };

  render() {
    return (
      <div>
        <h1>Projeto Quarentena Verao</h1>
        <div>
          <h2>Competidores</h2>
          <CardCompetidor
            nomeCompetidor="Rafael"
            listaObjetivos={this.state.listaCompetidor1}
            onNovoObjetivo={this.adicionaNovoObjetivoC1}
          />
          <CardCompetidor
            nomeCompetidor="Emily"
            listaObjetivos={this.state.listaCompetidor2}
            onNovoObjetivo={this.adicionaNovoObjetivoC2}
          />
        </div>
      </div>
    );
  }
}

export default App;
