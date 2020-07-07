import React from "react";
import { Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addChallenge, addChallengeUser } from "../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class NewChallengeButton extends React.Component {
  state = {
    challenge_name: "",
  };

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
      this.props.addChallengeUser(challengeId, this.props.userId);
      this.notify(`${challenge.name} challenge created!`);
    });
    this.setState({ challenge_name: "" });
  };

  onChallengeNameFormChange = (event) => {
    this.setState({
      challenge_name: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
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

export default connect(null, {
  addChallenge,
  addChallengeUser,
})(NewChallengeButton);
