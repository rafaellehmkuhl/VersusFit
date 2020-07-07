import React from "react";
import { Input, Button, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { addChallengerGoal } from "../actions";

const repetition_options = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" },
];
class NewGoalButton extends React.Component {
  state = {
    goal_name: "",
    goal_repetitions: 3,
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    var goal = {
      name: this.state.goal_name,
      repetitions: this.state.goal_repetitions,
      challenge_id: this.props.challenge_id,
    };
    this.props.addChallengerGoal(goal, this.props.user_id);
    this.setState({ goal_name: "" });
  };

  onGoalNameFormChange = (event) => {
    this.setState({
      goal_name: event.target.value,
    });
  };

  onGoalRepsFormChange = (e, { value }) => {
    this.setState({ goal_repetitions: value });
  };

  render() {
    const { goal_repetitions } = this.state.goal_repetitions;
    return (
      <form onSubmit={this.onFormSubmit}>
        <Input
          type="text"
          value={this.state.goal_name}
          onChange={this.onGoalNameFormChange}
          placeholder="New Goal"
          action
          fluid
        >
          <input />
          <Dropdown
            onChange={this.onGoalRepsFormChange}
            options={repetition_options}
            placeholder="Reps"
            selection
            compact
            value={goal_repetitions}
          />
          <Button type="submit" icon="add" color="teal"></Button>
        </Input>
      </form>
    );
  }
}

export default connect(null, {
  addChallengerGoal,
})(NewGoalButton);
