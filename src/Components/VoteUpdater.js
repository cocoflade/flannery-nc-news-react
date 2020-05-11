import React from "react";
import * as api from "../utils/Api";

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
        <p className="authorDateVoteP">
          <button className="voteBut" onClick={() => this.handleVote(1)}>
            &#8593;
          </button>{" "}
          {votes + voteDifference} Votes{" "}
          <button className="voteBut" onClick={() => this.handleVote(-1)}>
            &#8595;
          </button>
        </p>
      </div>
    );
  }

  handleVote = (voteChange) => {
    const { article_id, comment_id } = this.props;
    this.setState((currState) => {
      return { voteDifference: currState.voteDifference + voteChange };
    });
    if (article_id !== undefined)
      api.UpdateArticleVotes(article_id, voteChange);
    if (comment_id !== undefined)
      api
        .UpdateCommentVotes(comment_id, voteChange)

        .catch(() => {
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
