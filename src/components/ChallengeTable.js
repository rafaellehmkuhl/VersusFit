import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import CardCompetidor from "./CardCompetidor";

const nomeCompetidor1 = "Rafael";
const nomeCompetidor2 = "Emily";

export default class ChallengeTable extends Component {
  render() {
    return (
      <div>
        <Grid columns={2} centered divided>
          <Grid.Column>
            <CardCompetidor nomeCompetidor={nomeCompetidor1} />
          </Grid.Column>

          <Grid.Column>
            <CardCompetidor nomeCompetidor={nomeCompetidor2} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
