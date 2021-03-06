import React from "react";
import * as api from "../../utils/Api";
import CommentCard from "./Comment.card";
import CommentForm from "./Comment.form";
import ErrorDisplay from "../ErrorDisplay";
import LoadingSign from "../Loading/LoadingSign";

class Comments extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    err: "",
  };

  componentDidMount() {
    this.fetchComments();
  }

  deleteComment = (commentIdToDelete) => {
    api.delComment(commentIdToDelete).then(() => {
      this.setState((currState) => {
        const filteredArray = currState.comments.filter((comment) => {
          return commentIdToDelete !== comment.comment_id;
        });
        return { comments: filteredArray };
      });
    });
  };

  render() {
    const { comments, isLoading, err } = this.state;
    const { article_id, user } = this.props;

    if (isLoading) return <LoadingSign />;
    if (err) return <ErrorDisplay err={err} />;
    return (
      <>
        <CommentForm
          addStateComment={this.addStateComment}
          article_id={article_id}
          user={user}
        />
        <ul className="artComList">
          {comments.map((comment) => {
            return (
              <CommentCard
                comment={comment}
                key={comment.comment_id}
                deleteComment={this.deleteComment}
              />
            );
          })}
        </ul>
      </>
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
    api
      .getArticleComment(article_id)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false, err: err.response.data.msg });
      });
  }
}

export default Comments;
