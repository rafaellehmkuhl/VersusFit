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
    let status = false;
    switch (this.props.weekday) {
      case "dom":
        status = this.props.goal.dom_status;
        break;
      case "seg":
        status = this.props.goal.seg_status;
        break;
      case "ter":
        status = this.props.goal.ter_status;
        break;
      case "qua":
        status = this.props.goal.qua_status;
        break;
      case "qui":
        status = this.props.goal.qui_status;
        break;
      case "sex":
        status = this.props.goal.sex_status;
        break;
      case "sab":
        status = this.props.goal.sab_status;
        break;
      default:
        status = false;
    }

    return (
      <Checkbox
        id={`${this.props.goal_id}_${this.props.weekday}`}
        checked={status}
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
