import React from "react";
import { Link } from "@reach/router";

class ArticleCard extends React.Component {
  state = {
    showArticle: false,
  };

  showHideArticle = () => {
    this.setState((currState) => {
      return { showArticle: !currState.showArticle };
    });
  };

  render() {
    const { article } = this.props;
    return (
      <li key={article.article_id} className="article">
        <Link className="link" to={`/articles/${article.article_id}`}>
          <h4 className="title">{article.title}</h4>
        </Link>

        <p>Author: {article.author}</p>
        <button onClick={this.showHideArticle}>Read</button>

        {this.state.showArticle ? (
          <section>
            <p>ID: {article.article_id}</p>
            <p>{article.body}</p>
            <p>Votes: {article.votes}</p>
            <p>Topic: {article.topic}</p>
            <p>Created at: {article.created_at}</p>
            <p>Comments: {article.comment_count}</p>
            <button>See comments</button>
          </section>
        ) : null}
      </li>
    );
  }
}

export default ArticleCard;
