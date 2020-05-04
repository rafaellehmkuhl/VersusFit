import React from "react";

class ItemObjetivo extends React.Component {
  state = { status: this.props.item.status };

  onObjetivoChange = (event) => {
    event.preventDefault();
    this.props.onObjetivoChange(
      {
        status: !this.state.status,
      },
      this.props.item.id
    );
    this.setState({
      status: !this.state.status,
    });
  };

  onObjetivoDelete = (event) => {
    event.preventDefault();
    this.props.onObjetivoDelete(this.props.item.id);
  };

  render() {
    return (
      <div>
        <input
          type="checkbox"
          id={this.props.item.id}
          checked={this.state.status}
          onChange={this.onObjetivoChange}
        />
        <label htmlFor={this.props.item.id}>{this.props.item.tarefa}</label>
        <button onClick={this.onObjetivoDelete}>Del</button>
      </div>
    );
  }
}

export default ItemObjetivo;
