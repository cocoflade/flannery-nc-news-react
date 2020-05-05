import React from "react";
import "../App.css";
import axios from "axios";
import ArticleCard from "./article.card";
import SortButtons from "./sortButtons";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    showArticle: false,
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
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading, please wait...</p>;

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
    const { topic, article_id } = this.props;

    axios
      .get("https://flannery-nc-news.herokuapp.com/api/articles", {
        params: {
          topic: topic,
          article_id: article_id,
          sorted: sorted,
        },
      })
      .then((response) => {
        this.setState({ articles: response.data.articles, isLoading: false });
      });
  }
}

export default Articles;
