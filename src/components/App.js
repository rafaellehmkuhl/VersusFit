import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Segment, Divider } from "semantic-ui-react";
import ChallengeTable from "./ChallengeTable";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Segment>
              <Navbar />
              <Divider />
              <Route path="/" exact component={ChallengeTable} />
              <Route path="/login" exact component={LoginScreen} />
              <Route path="/register" exact component={RegisterScreen} />
            </Segment>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
