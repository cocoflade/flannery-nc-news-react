import React from "react";
import * as api from "../utils/api";

class CommentVoteUpdater extends React.Component {
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
          {votes + voteDifference} votes{" "}
          <button onClick={() => this.handleVote(-1)}>Down</button>
        </p>
      </div>
    );
  }

  handleVote = (voteChange) => {
    const { comment_id } = this.props;
    this.setState((currState) => {
      return { voteDifference: currState.voteDifference + voteChange };
    });
    api.UpdateCommentVotes(comment_id, voteChange).catch(() => {
      this.setState((currState) => {
        return {
          voteDifference: currState.voteDifference - voteChange,
          err: "Sorry, try again later",
        };
      });
    });
  };
}

export default CommentVoteUpdater;

// just refactoring the vote updater to work with comments, have a look at where its being passed from (comments) and make sure you add the comment id to the props for the path.
