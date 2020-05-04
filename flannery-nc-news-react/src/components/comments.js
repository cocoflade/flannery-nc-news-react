import React from "react";
import * as api from "../utils/api";

class Comments extends React.Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>Loading, please wait...</p>;

    return (
      <main className="comments">
        <p>Author: {comments.author}</p>
        <p>ID: {comments.article_id}</p>
        <p>Comment ID: {comments.comment_id}</p>
        <p>Votes: {comments.votes}</p>
        <p>Body: {comments.body}</p>
        <p>Created at: {comments.created_at}</p>
      </main>
    );
  }

  fetchComments() {
    const { article_id } = this.props;
    api.getArticleComment(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }
}

export default Comments;
