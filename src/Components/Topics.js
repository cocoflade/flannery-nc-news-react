import React from "react";
import { Router } from "@reach/router";
import "../App.css";
import { Link } from "@reach/router";
import * as api from "../utils/Api";
import Articles from "./Articles/Articles";
import LoadingSign from "./Loading/LoadingSign";
import ErrorDisplay from "./ErrorDisplay";

class Topics extends React.Component {
  state = {
    topics: [],
    isLoading: true,
    err: "",
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics, isLoading, err } = this.state;
    if (isLoading) return <LoadingSign />;
    if (err) return <ErrorDisplay err={err} />;
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
        this.setState({ topics, isLoading: false });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({ isLoading: false, err: err.data });
      });
  }
}

export default Topics;
