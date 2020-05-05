import React from "react";
import { Button, Checkbox, Segment } from "semantic-ui-react";

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
    this.setState((prevState) => ({ status: !prevState.status }));
  };

  onObjetivoDelete = (event) => {
    event.preventDefault();
    this.props.onObjetivoDelete(this.props.item.id);
  };

  render() {
    return (
      <Segment attached>
        <Checkbox
          id={this.props.item.id}
          checked={this.state.status}
          onChange={this.onObjetivoChange}
          label={this.props.item.tarefa}
          toggle
        />
        <Button
          color="red"
          onClick={this.onObjetivoDelete}
          icon="remove"
          floated="right"
          size="mini"
        />
      </Segment>
    );
  }
}

export default ItemObjetivo;
