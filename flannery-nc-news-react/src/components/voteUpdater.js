import React from "react";
import * as api from "../utils/api";

class VoteUpdater extends React.Component {
  state = {
    voteDifference: 0,
  };

  render() {
    const { votes } = this.props;
    const { voteDifference } = this.state;
    return (
      <div>
        <p>
          <button onClick={() => this.handleVote(1)}>Up</button> This has{" "}
          {votes + voteDifference} votes{" "}
          <button onClick={() => this.handleVote(-1)}>Down</button>
        </p>
      </div>
    );
  }

  handleVote = (voteChange) => {
    const { id } = this.props;
    this.setState((currState) => {
      return { voteDifference: currState.voteDifference + voteChange };
    });
    api.UpdateVotes(id, voteChange);
  };
}

export default VoteUpdater;
