import React from "react";
import CommentVoteUpdater from "./Comment.voteUpdater";

function CommentCard(props) {
  const { comment, deleteComment } = props;
  const humanDate = new Date(comment.created_at).toDateString();

  return (
    <li className="comment">
      <p>Author: {comment.author}</p>
      <p>ID: {comment.article_id}</p>
      <p>Comment ID: {comment.comment_id}</p>
      <p>Created at: {humanDate}</p>
      <p>Body: {comment.body}</p>
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

export default CommentCard;
