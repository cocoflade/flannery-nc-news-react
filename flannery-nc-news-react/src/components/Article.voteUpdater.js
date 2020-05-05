import React from "react";
import * as api from "../utils/api";

class ArticleVoteUpdater extends React.Component {
  state = {
    voteDifference: 0,
    err: "",
  };

  render() {
    const { votes } = this.props;
    const { voteDifference } = this.state;
    return (
      <div>
        <p className="voteP">
          <button onClick={() => this.handleVote(1)}>Up</button>{" "}
          {votes + voteDifference} Votes{" "}
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
    api.UpdateArticleVotes(id, voteChange).catch(() => {
      this.setState((currState) => {
        return {
          voteDifference: currState.voteDifference - voteChange,
          err: "Sorry, try again later",
        };
      });
    });
  };
}

export default ArticleVoteUpdater;
