import React from "react";
import "../App.css";
import axios from "axios";
// import axios from "axios";

class Articles extends React.Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading, please wait...</p>;

    return (
      <div>
        <ul className="articleList">
          {articles.map(({ article_id, title, author }) => {
            return (
              <li key={article_id} className="article">
                <p>{title}</p>
                <p>Author: {author}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  fetchArticles() {
    axios
      .get("https://flannery-nc-news.herokuapp.com/api/articles")
      .then((response) => {
        this.setState({ articles: response.data.articles, isLoading: false });
      });
  }
}

export default Articles;
