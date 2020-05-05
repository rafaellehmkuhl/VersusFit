import React from "react";
// import SemanaSelector from "./SemanaSelector";
import CardCompetidor from "./CardCompetidor";
import axios from "axios";
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

const API_URL = "https://projeto-quarentena-verao-api.herokuapp.com/";

class App extends React.Component {
  state = {
    listaCompetidor1: [],
    listaCompetidor2: [],
  };

  componentDidMount() {
    this.updateObjetivosList();
  }

  updateObjetivosList = () => {
    axios.get(`${API_URL}${nomeCompetidor1}`).then((res) => {
      this.setState({
        listaCompetidor1: res.data,
      });
    });
    axios.get(`${API_URL}${nomeCompetidor2}`).then((res) => {
      this.setState({
        listaCompetidor2: res.data,
      });
    });
  };

  postNewObjetivo = (item) => {
    axios.post(`${API_URL}`, item).then((res) => {
      this.updateObjetivosList();
    });
  };

  changeObjetivo = (item, item_id) => {
    axios.patch(`${API_URL}${item_id}`, item).then((res) => {
      this.updateObjetivosList();
    });
  };

  deleteObjetivo = (item_id) => {
    axios.delete(`${API_URL}${item_id}`).then((res) => {
      this.updateObjetivosList();
    });
  };

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
                <CardCompetidor
                  nomeCompetidor={nomeCompetidor1}
                  listaObjetivos={this.state.listaCompetidor1}
                  onNovoObjetivo={this.postNewObjetivo}
                  atObjetivoChange={this.changeObjetivo}
                  atObjetivoDelete={this.deleteObjetivo}
                />
              </Grid.Column>

              <Grid.Column>
                <CardCompetidor
                  nomeCompetidor={nomeCompetidor2}
                  listaObjetivos={this.state.listaCompetidor2}
                  onNovoObjetivo={this.postNewObjetivo}
                  atObjetivoChange={this.changeObjetivo}
                  atObjetivoDelete={this.deleteObjetivo}
                />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
