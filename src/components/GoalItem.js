import React from "react";
import { Table, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteChallengerGoal } from "../actions";
import DayCheckbox from "./DayCheckbox";

class GoalItem extends React.Component {
  onObjetivoDelete = (event) => {
    event.preventDefault();
    this.props.deleteChallengerGoal(this.props.goal.id);
  };

  render() {
    const numCompletedGoals =
      this.props.goal.dom_status +
      this.props.goal.seg_status +
      this.props.goal.ter_status +
      this.props.goal.qua_status +
      this.props.goal.qui_status +
      this.props.goal.sex_status +
      this.props.goal.sab_status;

    const goalPercentage =
      (100 * numCompletedGoals) / this.props.goal.repetitions;

    return (
      <Table.Row
        textAlign="center"
        negative={goalPercentage !== 100}
        positive={goalPercentage === 100}
      >
        <Table.Cell textAlign="left">{`${this.props.goal.name} (${numCompletedGoals}/${this.props.goal.repetitions})`}</Table.Cell>
        <Table.Cell>
          <DayCheckbox goal={this.props.goal} weekday="dom" />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox goal={this.props.goal} weekday="seg" />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox goal={this.props.goal} weekday="ter" />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox goal={this.props.goal} weekday="qua" />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox goal={this.props.goal} weekday="qui" />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox goal={this.props.goal} weekday="sex" />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox goal={this.props.goal} weekday="sab" />
        </Table.Cell>
        <Table.Cell>
          <Button
            color="red"
            onClick={this.onObjetivoDelete}
            icon="remove"
            floated="right"
            size="mini"
          />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default connect(null, {
  deleteChallengerGoal,
})(GoalItem);
