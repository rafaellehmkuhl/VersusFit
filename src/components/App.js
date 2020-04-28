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

function App() {
  return (
    <div>
      <h1>Projeto Quarentena Verao</h1>
      <SemanaSelector />
      <div>
        <h2>Competidores</h2>
        <CardCompetidor competidor="Rafael" listaObjetivos={listaRafael} />
        <CardCompetidor competidor="Emily" listaObjetivos={listaEmily} />
      </div>
    </div>
  );
}

export default App;
