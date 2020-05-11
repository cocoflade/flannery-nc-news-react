import React from "react";
import CommentVoteUpdater from "./Comment.voteUpdater";

function CommentCard(props) {
  const { comment, deleteComment } = props;
  const humanDate = new Date(comment.created_at).toDateString();

  return (
    <li className="articleComment">
      <p className="bodyP">"{comment.body}"</p>
      <p className="authorDateVoteP">
        Published by {comment.author} on {humanDate}
      </p>

      <p className="idP">
        Article ID: {comment.article_id} Comment ID: {comment.comment_id}
      </p>
      <CommentVoteUpdater
        votes={comment.votes}
        id={comment.article_id}
        comment_id={comment.comment_id}
      />

      {comment.author === "jessjelly" ? (
        <section>
          <button onClick={() => deleteComment(comment.comment_id)}>
            delete comment
          </button>
        </section>
      ) : null}
    </li>
  );
}

export default CommentCard;
