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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading, please wait...</p>;

    return (
      <div>
        <ul className="articleList">
          {articles.map(({ article_id, title, author, topic }) => {
            return (
              <li key={article_id} className="article">
                <p>{title}</p>
                <p>Author: {author}</p>
                <p>{topic}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  fetchArticles() {
    const { topic } = this.props;
    axios
      .get("https://flannery-nc-news.herokuapp.com/api/articles", {
        params: {
          topic: topic,
        },
      })
      .then((response) => {
        this.setState({ articles: response.data.articles, isLoading: false });
      });
  }
}

export default Articles;
