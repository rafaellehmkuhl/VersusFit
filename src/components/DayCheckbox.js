import React from "react";
import { Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleChallengerGoal } from "../actions";

class DayCheckbox extends React.Component {
  onStatusChange = (event) => {
    event.preventDefault();
    this.props.toggleChallengerGoal(
      this.props.goal.user_id,
      this.props.goal.id,
      this.props.weekday
    );
  };

  render() {
    return (
      <Checkbox
        id={`${this.props.goal_id}_${this.props.weekday}`}
        checked={this.props.status}
        onChange={this.onStatusChange}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    goal: state.goals[ownProps.user_id].filter(
      (element) => element.id === ownProps.goal_id
    )[0],
  };
};

export default connect(mapStateToProps, {
  toggleChallengerGoal,
})(DayCheckbox);
