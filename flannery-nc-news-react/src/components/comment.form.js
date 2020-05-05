import React from "react";
import Axios from "axios";

class CommentForm extends React.Component {
  state = {
    body: "",
    article_id: "",
    user: "",
  };

  handleCommentSubmission = (event) => {
    const { article_id, addStateComment, user } = this.props;
    const { body } = this.state;
    event.preventDefault();
    Axios.post(
      `https://flannery-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      {
        body,
        article_id,
        username: user,
      }
    )
      .then((response) => {
        addStateComment(response.data.comment);
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
          <input name="body" onChange={this.handleChange} value={body} />
        </label>

        <button>Add comment</button>
      </form>
    );
  }
}

export default CommentForm;
