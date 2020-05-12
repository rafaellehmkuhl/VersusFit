import React from "react";
import { Button, Checkbox, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

class ItemObjetivo extends React.Component {
  state = { status: this.props.item.status };

  onObjetivoChange = (event) => {
    event.preventDefault();
    this.props.onObjetivoChange(this.props.item.id);
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
          checked={this.props.status}
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

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.goals[ownProps.challengerName].filter(
      (element) => element.id === ownProps.item.id
    )[0],
  };
};

export default connect(mapStateToProps)(ItemObjetivo);
