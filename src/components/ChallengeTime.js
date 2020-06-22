import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import CardCompetidor from "./CardCompetidor";

const user6_id = 6;
const user7_id = 7;
const user8_id = 8;
const user9_id = 9;
const user10_id = 10;
const user11_id = 11;
const user12_id = 12;

export default class ChallengeTable extends Component {
  render() {
    return (
      <div>
        <Grid rows={2} centered divided>
          <Grid.Row>
            <CardCompetidor user_id={user6_id} />
          </Grid.Row>
          <Grid.Row>
            <CardCompetidor user_id={user7_id} />
          </Grid.Row>
          <Grid.Row>
            <CardCompetidor user_id={user8_id} />
          </Grid.Row>
          <Grid.Row>
            <CardCompetidor user_id={user9_id} />
          </Grid.Row>
          <Grid.Row>
            <CardCompetidor user_id={user10_id} />
          </Grid.Row>
          <Grid.Row>
            <CardCompetidor user_id={user11_id} />
          </Grid.Row>
          <Grid.Row>
            <CardCompetidor user_id={user12_id} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
