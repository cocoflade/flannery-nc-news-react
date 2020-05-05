import React from "react";
import CommentVoteUpdater from "./Comment.voteUpdater";

class CommentCard extends React.Component {
  render() {
    const { comment, deleteComment } = this.props;
    const humanDate = new Date(comment.created_at).toDateString();

    return (
      <li className="comment">
        <p>Author: {comment.author}</p>
        <p>ID: {comment.article_id}</p>
        <p>Comment ID: {comment.comment_id}</p>
        <p>Votes: {comment.votes}</p>
        <p>Body: {comment.body}</p>
        <p>Created at: {humanDate}</p>
        <CommentVoteUpdater
          votes={comment.votes}
          id={comment.article_id}
          comment_id={comment.comment_id}
        />

        {comment.author === "jessjelly" ? (
          <section>
            <button onClick={deleteComment}>delete comment</button>
          </section>
        ) : null}
      </li>
    );
  }
}

export default CommentCard;
