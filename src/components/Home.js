import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import CardCompetidor from "./CardCompetidor";

class Home extends Component {
  renderGoalList() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Grid rows={1} centered divided>
            <Grid.Row>
              <CardCompetidor user_id={this.props.userId} />
            </Grid.Row>
          </Grid>
        </div>
      );
    } else {
      return <div>Not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderGoalList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, {})(Home);
