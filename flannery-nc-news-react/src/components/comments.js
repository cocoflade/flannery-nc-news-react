import React from "react";
import * as api from "../utils/api";
import CommentCard from "./comment.card";

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
    console.log(comments);
    //map
    return (
      <ul className="commentList">
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
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
