import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import CardCompetidor from "./CardCompetidor";

const user1_id = 1;
const user2_id = 2;

export default class ChallengeTable extends Component {
  render() {
    return (
      <div>
        <Grid rows={2} centered divided>
          <Grid.Row>
            <CardCompetidor user_id={user1_id} />
          </Grid.Row>

          <Grid.Row>
            <CardCompetidor user_id={user2_id} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
