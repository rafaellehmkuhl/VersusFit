import React from "react";
import SemanaSelector from "./SemanaSelector";
import CardCompetidor from "./CardCompetidor";

var listaRafael = [
  "Calistenia",
  "Corrida",
  "Salada",
  "Calistenia",
  "Corrida",
  "Salada",
];

var listaEmily = ["Corrida", "Corrida", "Ginastica", "Ginastica", "Meatless"];

var listaSemanas = ["Semana 1", "Semana 2"];

function App() {
  return (
    <div>
      <h1>Projeto Quarentena Verao</h1>
      <SemanaSelector listaSemanas={listaSemanas} />
      <div>
        <h2>Competidores</h2>
        <CardCompetidor nomeCompetidor="Rafael" listaObjetivos={listaRafael} />
        <CardCompetidor nomeCompetidor="Emily" listaObjetivos={listaEmily} />
      </div>
    </div>
  );
}

export default App;
