import React from "react";

class SemanaSelector extends React.Component {
  render() {
    return (
      <select>
        {this.props.listaSemanas.map((semana) => {
          return <option value={semana}>{semana}</option>;
        })}
      </select>
    );
  }
}

export default SemanaSelector;
