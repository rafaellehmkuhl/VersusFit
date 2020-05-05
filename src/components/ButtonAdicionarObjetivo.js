import React from "react";
import { Input, Button } from "semantic-ui-react";

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
        <Input
          type="text"
          value={this.state.term}
          onChange={this.onFormChange}
          placeholder="Novo objetivo"
          action
          fluid
        >
          <input />
          <Button type="submit" icon="add" color="teal"></Button>
        </Input>
      </form>
    );
  }
}

export default ButtonAdicionarObjetivo;
