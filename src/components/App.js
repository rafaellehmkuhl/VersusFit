import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Segment, Divider } from "semantic-ui-react";
import ChallengeTime from "./ChallengeTime";
import ChallengeTable from "./ChallengeTable";
import ChallengeTable2 from "./ChallengeTable2";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import CreateChallenge from "./CreateChallenge";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Segment>
              <Navbar />
              <Divider />
              <Route path="/" exact component={Home} />
              <Route path="/que-time" exact component={ChallengeTime} />
              <Route path="/rafa-emily" exact component={ChallengeTable} />
              <Route path="/danilo-bia" exact component={ChallengeTable2} />
              <Route path="/login" exact component={LoginScreen} />
              <Route path="/register" exact component={RegisterScreen} />
              <Route
                path="/create-challenge"
                exact
                component={CreateChallenge}
              />
            </Segment>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
