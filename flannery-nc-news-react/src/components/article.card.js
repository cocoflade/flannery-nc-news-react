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
    const humanDate = new Date(article.created_at).toDateString();

    return (
      <li className="article">
        <Link className="artLink" to={`/articles/${article.article_id}`}>
          <h3 className="articleLink">
            <span className="redSyntax">&lt;</span>
            {article.title}
            <span className="redSyntax">/></span>
          </h3>
        </Link>

        <p className="authorDateP">
          Published by {article.author} on {humanDate}
        </p>
        <p className="idP">{article.comment_count} Comments</p>
        <ArticleVoteUpdater votes={article.votes} id={article.article_id} />

        <button onClick={this.showHideArticle}>Read all</button>

        {this.state.showArticle ? (
          <section>
            <p className="idP">Article ID: {article.article_id}</p>
            <p className="bodyP">{article.body}</p>
            <p className="voteP">
              There's more like this under the {article.topic} tab!
            </p>

            <Link
              className="articleLink"
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
