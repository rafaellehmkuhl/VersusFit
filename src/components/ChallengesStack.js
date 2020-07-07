import React from "react";
import { Header, Container } from "semantic-ui-react";
import CardCompetidor from "./CardCompetidor";

class ChallengesStack extends React.Component {
  renderChallenge(challenge) {
    return (
      <div>
        <Container style={{ paddingBottom: "5em" }}>
          <Header as="h2" attached="top" block>
            {challenge.name}
          </Header>
          {challenge.users.map((user) => {
            return (
              <CardCompetidor
                key={user.id}
                challenge_id={challenge.id}
                user_id={user.id}
              />
            );
          })}
          <Header as="h4" attached="bottom" block></Header>
        </Container>
      </div>
    );
  }

  render() {
    return <div>{this.renderChallenge(this.props.challenge)}</div>;
  }
}

export default ChallengesStack;
