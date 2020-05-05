import React from "react";
import { Link } from "@reach/router";
import ArticleVoteUpdater from "./Article.voteUpdater";

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
        <p>Created at: {article.created_at}</p>
        <p>Comments: {article.comment_count}</p>
        {/* <p>Votes: {article.votes}</p> */}
        <ArticleVoteUpdater votes={article.votes} id={article.article_id} />

        <button onClick={this.showHideArticle}>Read all</button>

        {this.state.showArticle ? (
          <section>
            <p>ID: {article.article_id}</p>
            <p>{article.body}</p>
            <p>Topic: {article.topic}</p>

            <Link
              className="link"
              to={`/articles/${article.article_id}/comments`}
            >
              <button>See comments</button>
            </Link>
          </section>
        ) : null}
      </li>
    );
  }
}

export default ArticleCard;
