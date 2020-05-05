import React from "react";
import "./App.css";
import Header from "./components/header";
import NavBar from "./components/navBar";
import { Router } from "@reach/router";
import Articles from "./components/articles";
import Topics from "./components/topics";
import Comments from "./components/comments";
import SingleArticle from "./components/singleArticle";

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
          <Articles path="/articles" />
          <SingleArticle path="/articles/:article_id" />
          <Comments path="/articles/:article_id/comments" user={user} />
          <Topics path="/topics/*" />
        </Router>
      </div>
    );
  }
}
export default App;
