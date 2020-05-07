import React from "react";
import { Router } from "@reach/router";
import "../App.css";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import Articles from "./Articles/articles";
import LoadingSign from "./Loading/LoadingSign";

class Topics extends React.Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <LoadingSign />;

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
    api
      .getTopics()
      .then((topics) => {
        this.setState({ topics });
      })
      .catch((err) => {
        this.setState({ isLoading: false, err: err.data });
      });
  }
}

export default Topics;
