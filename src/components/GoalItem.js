import React from "react";
import { Table, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteChallengerGoal } from "../actions";
import DayCheckbox from "./DayCheckbox";

class GoalItem extends React.Component {
  onObjetivoDelete = (event) => {
    event.preventDefault();
    this.props.deleteChallengerGoal(this.props.goal_id);
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
    return (
      <Table.Row textAlign="center">
        <Table.Cell textAlign="left">{`${this.props.goal.name} (${numCompletedGoals}/${this.props.goal.repetitions})`}</Table.Cell>
        <Table.Cell>
          <DayCheckbox
            goal_id={this.props.goal_id}
            user_id={this.props.user_id}
            weekday="dom"
          />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox
            goal_id={this.props.goal_id}
            user_id={this.props.user_id}
            weekday="seg"
          />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox
            goal_id={this.props.goal_id}
            user_id={this.props.user_id}
            weekday="ter"
          />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox
            goal_id={this.props.goal_id}
            user_id={this.props.user_id}
            weekday="qua"
          />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox
            goal_id={this.props.goal_id}
            user_id={this.props.user_id}
            weekday="qui"
          />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox
            goal_id={this.props.goal_id}
            user_id={this.props.user_id}
            weekday="sex"
          />
        </Table.Cell>
        <Table.Cell>
          <DayCheckbox
            goal_id={this.props.goal_id}
            user_id={this.props.user_id}
            weekday="sab"
          />
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

const mapStateToProps = (state, ownProps) => {
  return {
    goal: Object.values(state.goals).filter(
      (goal) => goal.id === ownProps.goal_id
    )[0],
  };
};

export default connect(mapStateToProps, {
  deleteChallengerGoal,
})(GoalItem);
