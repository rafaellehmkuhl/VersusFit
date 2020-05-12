import React from "react";
import CardCompetidor from "./CardCompetidor";
import { Grid, Segment, Header, Divider, Icon } from "semantic-ui-react";

const nomeCompetidor1 = "Rafael";
const nomeCompetidor2 = "Emily";

class App extends React.Component {
  render() {
    return (
      <Segment>
        <Header as="h1" attached="top" block textAlign="center">
          <Icon name="heart outline" />
          Projeto Quarentena-Verao
        </Header>

        <Divider />

        <Grid columns={2} centered divided>
          <Grid.Column>
            <CardCompetidor nomeCompetidor={nomeCompetidor1} />
          </Grid.Column>

          <Grid.Column>
            <CardCompetidor nomeCompetidor={nomeCompetidor2} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default App;
