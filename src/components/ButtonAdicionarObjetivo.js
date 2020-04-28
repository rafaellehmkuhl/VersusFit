import React from "react";

class ButtonAdicionarObjetivo extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });
  };

  onFormChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onFormChange}
          placeholder="Novo objetivo"
        />
      </form>
    );
  }
}

export default ButtonAdicionarObjetivo;
