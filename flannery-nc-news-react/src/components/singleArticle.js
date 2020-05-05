import React from "react";
import { Link } from "@reach/router";
import ArticleVoteUpdater from "./Article.voteUpdater";
import * as api from "../utils/api";
import ErrorDisplay from "./ErrorDisplay";

class SingleArticle extends React.Component {
  state = {
    article: [],
    comments: [],
    isLoading: true,
    err: "",
  };

  componentDidMount() {
    this.fetchArticle();
  }

  render() {
    const { article, isLoading, err } = this.state;
    const humanDate = new Date(article.created_at).toDateString();

    if (isLoading) return <p>Loading, please wait...</p>;
    if (err) return <ErrorDisplay err={err} />;
    return (
      <main className="article">
        <h3 className="title">
          <span className="redSyntax">&lt;</span>
          {article.title}
          <span className="redSyntax">/></span>
        </h3>
        <p className="authorDateP">
          Published by {article.author} on {humanDate}
        </p>
        <p>{article.comment_count} Comments</p>
        <ArticleVoteUpdater votes={article.votes} id={article.article_id} />

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
      </main>
    );
  }

  fetchArticle() {
    const { article_id } = this.props;
    api
      .getArticle(article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false, err: err.response.data.msg });
      });
  }
}

export default SingleArticle;
