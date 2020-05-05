import React from "react";
import { Router } from "@reach/router";
import "../App.css";
import { Link } from "@reach/router";
import Axios from "axios";
import Articles from "./articles";

class Topics extends React.Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics } = this.state;
    return (
      <>
        <nav className="topicBar">
          {topics.map(({ slug }) => {
            return (
              <Link key={slug} className="link" to={`/topics/${slug}`}>
                {slug}
              </Link>
            );
          })}
        </nav>
        <Router>
          <Articles path="/:topic" />
        </Router>
      </>
    );
  }

  fetchTopics() {
    Axios.get("https://flannery-nc-news.herokuapp.com/api/topics").then(
      (response) => {
        this.setState({ topics: response.data.topics });
      }
    );
  }
}

export default Topics;
