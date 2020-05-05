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
        <h4 className="title">{article.title}</h4>
        <p>Author: {article.author}</p>
        <p>ID: {article.article_id}</p>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        <p>Topic: {article.topic}</p>
        <p>Created at: {humanDate}</p>
        <p>Comments: {article.comment_count}</p>
        <ArticleVoteUpdater votes={article.votes} id={article.article_id} />

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
