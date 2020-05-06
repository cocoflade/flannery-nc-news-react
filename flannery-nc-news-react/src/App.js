import React from "react";
import "./App.css";
import Header from "./components/header";
import NavBar from "./components/navBar";
import { Router } from "@reach/router";
import Articles from "./components/Articles/articles";
import Topics from "./components/Topics";
import Comments from "./components/Comments/comments";
import SingleArticle from "./components/Articles/singleArticle";
import ErrorDisplay from "./components/ErrorDisplay";
import Users from "./components/Users/Users";

class App extends React.Component {
  state = {
    user: "jessjelly",
  };
  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <Header user={user} />
        <NavBar />
        <Router>
          <Articles path="/" />
          <Articles path="/articles/*" />
          <SingleArticle path="/articles/:article_id" />
          <Comments path="/articles/:article_id/comments" user={user} />
          <Topics path="/topics/*" />
          <Users path="/users/*" />
          <ErrorDisplay default />
        </Router>
      </div>
    );
  }
}
export default App;
