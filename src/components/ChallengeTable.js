import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import CardCompetidor from "./CardCompetidor";

const nomeCompetidor1 = "Rafael";
const nomeCompetidor2 = "Emily";

export default class ChallengeTable extends Component {
  render() {
    return (
      <div>
        <Grid rows={2} centered divided>
          <Grid.Row>
            <CardCompetidor nomeCompetidor={nomeCompetidor1} />
          </Grid.Row>

          <Grid.Row>
            <CardCompetidor nomeCompetidor={nomeCompetidor2} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
