import React from "react";
import Axios from "axios";

class CommentForm extends React.Component {
  state = {
    body: "",
    article_id: "",
    author: "jessjelly",
  };

  handleCommentSubmission = (event) => {
    const { article_id, addStateComment } = this.props;
    const { body, author } = this.state;
    event.preventDefault();
    Axios.post(
      `https://flannery-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      {
        body,
        article_id,
        username: author,
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
