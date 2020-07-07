import React from "react";
import { Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addChallenge, addChallengeUser, fetchUsers } from "../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

class NewChallengeButton extends React.Component {
  state = {
    challenge_name: "",
    selectedUsers: null,
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  notify = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  onFormSubmit = (event) => {
    event.preventDefault();
    var challenge = {
      name: this.state.challenge_name,
    };
    this.props.addChallenge(challenge).then((challengeId) => {
      this.state.selectedUsers.forEach((user) => {
        this.props.addChallengeUser(challengeId, user.value);
      });
      this.notify(`${challenge.name} challenge created!`);
    });
    this.setState({ challenge_name: "" });
  };

  onChallengeNameFormChange = (event) => {
    this.setState({
      challenge_name: event.target.value,
    });
  };

  handleSelectedUsersChange = (selectedUsers) => {
    this.setState({ selectedUsers });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <Select
          name="users-field"
          value={this.state.value}
          onChange={this.handleSelectedUsersChange}
          options={this.props.users}
          isMulti
        />
        <Input
          type="text"
          value={this.state.challenge_name}
          onChange={this.onChallengeNameFormChange}
          placeholder="New Challenge"
          action
          fluid
        >
          <input />
          <Button type="submit" icon="add" color="teal"></Button>
        </Input>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const users = Object.values(state.users).map((user) => ({
    value: user.id,
    label: user.name,
  }));
  const users_sorted = users.sort((a, b) => a.label.localeCompare(b.label));
  return {
    users: users_sorted,
  };
};

export default connect(mapStateToProps, {
  addChallenge,
  addChallengeUser,
  fetchUsers,
})(NewChallengeButton);
