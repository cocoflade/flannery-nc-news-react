import React from "react";

function CommentCard({ comment }) {
  return (
    <li>
      <main className="comment">
        <p>Author: {comment.author}</p>
        <p>ID: {comment.article_id}</p>
        <p>Comment ID: {comment.comment_id}</p>
        <p>Votes: {comment.votes}</p>
        <p>Body: {comment.body}</p>
        <p>Created at: {comment.created_at}</p>
      </main>
    </li>
  );
}

export default CommentCard;
