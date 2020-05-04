import React from "react";
// import SemanaSelector from "./SemanaSelector";
import CardCompetidor from "./CardCompetidor";
import axios from "axios";

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
        <h1>Projeto Quarentena Verao</h1>
        <div>
          <h2>Competidores</h2>
          <CardCompetidor
            nomeCompetidor={nomeCompetidor1}
            listaObjetivos={this.state.listaCompetidor1}
            onNovoObjetivo={this.postNewObjetivo}
            atObjetivoChange={this.changeObjetivo}
            atObjetivoDelete={this.deleteObjetivo}
          />
          <CardCompetidor
            nomeCompetidor={nomeCompetidor2}
            listaObjetivos={this.state.listaCompetidor2}
            onNovoObjetivo={this.postNewObjetivo}
            atObjetivoChange={this.changeObjetivo}
            atObjetivoDelete={this.deleteObjetivo}
          />
        </div>
      </div>
    );
  }
}

export default App;
