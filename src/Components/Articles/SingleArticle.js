import React from "react";
import { Link, Router } from "@reach/router";
import VoteUpdater from "../VoteUpdater";
import * as api from "../../utils/Api";
import ErrorDisplay from "../ErrorDisplay";
import LoadingSign from "../Loading/LoadingSign";
import Comments from "../Comments/Comments";

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

    if (isLoading) return <LoadingSign />;
    if (err) return <ErrorDisplay err={err} />;
    return (
      <main className="articleComment">
        <h3 className="title">
          <span className="redSyntax">&lt;</span>
          {article.title}
          <span className="redSyntax">/></span>
        </h3>
        <p className="authorDateVoteP">
          Published by {article.author} on {humanDate}
        </p>
        <p>{article.comment_count} Comments</p>
        <VoteUpdater votes={article.votes} id={article.article_id} />

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
        <Router>
          <Comments path={`/:${article.article_id}/comments`} />
        </Router>
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
        this.setState({ isLoading: false, err: err.data });
      });
  }
}

export default SingleArticle;
