import React from "react";
// import SemanaSelector from "./SemanaSelector";
import CardCompetidor from "./CardCompetidor";
import {
  Container,
  Grid,
  Segment,
  Header,
  Divider,
  Icon,
} from "semantic-ui-react";

const nomeCompetidor1 = "Rafael";
const nomeCompetidor2 = "Emily";

class App extends React.Component {
  render() {
    return (
      <div>
        <Segment>
          <Container centered style={{ padding: "1em" }}>
            <Header as="h1" attached="top" block textAlign="center">
              <Icon name="heart outline" />
              Projeto Quarentena Verao
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
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
