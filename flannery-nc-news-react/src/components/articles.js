import React from "react";
import "../App.css";
import * as api from "../utils/api";
import ArticleCard from "./Article.card";
import SortButtons from "./SortButtons";
import ErrorDisplay from "./ErrorDisplay";
import LoadingSign from "../components/Loading/LoadingSign";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    showArticle: false,
    err: "",
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  articleSortBy = (sorted) => {
    this.fetchArticles(sorted);
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <LoadingSign />;
    if (err) return <ErrorDisplay err={err} />;
    return (
      <>
        <SortButtons sorted={this.articleSortBy} />
        <ul className="articleList">
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </>
    );
  }

  fetchArticles(sorted) {
    const { author, topic, article_id } = this.props;

    api
      .getArticles(author, topic, article_id, sorted)
      .then((articles) => {
        this.setState({
          articles: articles,
          isLoading: false,
        });
      })
      .catch((err) => {
        this.setState({ isLoading: false, err: err.data });
      });
  }
}

export default Articles;
