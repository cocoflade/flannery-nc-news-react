import React from "react";

class CommentCard extends React.Component {
  state = {
    name: "jessjelly",
  };

  render() {
    const { comment, deleteComment } = this.props;

    return (
      <li className="comment">
        <p>Author: {comment.author}</p>
        <p>ID: {comment.article_id}</p>
        <p>Comment ID: {comment.comment_id}</p>
        <p>Votes: {comment.votes}</p>
        <p>Body: {comment.body}</p>
        <p>Created at: {comment.created_at}</p>
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
