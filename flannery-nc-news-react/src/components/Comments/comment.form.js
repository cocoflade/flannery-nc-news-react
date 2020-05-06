import React from "react";
import * as api from "../../utils/api";

class CommentForm extends React.Component {
  state = {
    body: "",
    article_id: "",
    user: "",
    err: "",
  };

  handleCommentSubmission = (event) => {
    const { article_id, addStateComment, user } = this.props;
    const { body } = this.state;
    event.preventDefault();
    api
      .PostComment(article_id, addStateComment, user, body)
      .then((comment) => {
        addStateComment({ comment });
      })
      .catch((err) => console.dir(err));
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleCommentSubmission}>
        <label>
          Comment:{" "}
          <input
            name="body"
            onChange={this.handleChange}
            value={body}
            required
          />
        </label>

        <button>Add comment</button>
      </form>
    );
  }
}

export default CommentForm;
