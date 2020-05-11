import React from "react";
import { Link } from "@reach/router";
import VoteUpdater from "../VoteUpdater";

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
      <li className="articleComment">
        <Link className="headingLink" to={`/articles/${article.article_id}`}>
          <h3 className="headingLink">
            <span className="redSyntax">&lt;</span>
            {article.title}
            <span className="redSyntax">/></span>
          </h3>
        </Link>

        <p className="authorDateVoteP">
          Published by{" "}
          <Link className="headingLink" to={`/users`}>
            {article.author}
          </Link>{" "}
          on {humanDate}
        </p>

        <p className="idP">{article.comment_count} Comments</p>
        <VoteUpdater votes={article.votes} article_id={article.article_id} />

        <button onClick={this.showHideArticle}>Read all</button>

        {this.state.showArticle ? (
          <section>
            <p className="idP">Article ID: {article.article_id}</p>
            <p className="bodyP">{article.body}</p>
            <p className="authorDateVoteP">
              There's more like this under the {article.topic} tab!
            </p>

            <Link
              className="headingLink"
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
