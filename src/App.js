import React from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import { Router } from "@reach/router";
import Articles from "./Components/Articles/Articles";
import Topics from "./Components/Topics";
import Comments from "./Components/Comments/Comments";
import SingleArticle from "./Components/Articles/SingleArticle";
import ErrorDisplay from "./Components/ErrorDisplay";
import Users from "./Components/Users/Users";

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
