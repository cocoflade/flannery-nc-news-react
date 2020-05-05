import React from "react";
import * as api from "../utils/api";
import CommentCard from "./comment.card";
import CommentForm from "./comment.form";

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
    const { article_id } = this.props;

    if (isLoading) return <p>Loading, please wait...</p>;
    return (
      <ul className="commentList">
        <CommentForm
          addStateComment={this.addStateComment}
          article_id={article_id}
        />
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    );
  }

  addStateComment = (newComment) => {
    this.setState((currState) => {
      return {
        comments: [newComment, ...currState.comments],
      };
    });
  };

  fetchComments() {
    const { article_id } = this.props;
    api.getArticleComment(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }
}

export default Comments;