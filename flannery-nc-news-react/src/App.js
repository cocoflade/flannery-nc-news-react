import React from "react";
import "./App.css";
import Header from "./components/header";
import NavBar from "./components/navBar";
import { Router } from "@reach/router";
import Articles from "./components/articles";
import Topics from "./components/topics";
import Comments from "./components/comments";
import SingleArticle from "./components/singleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <Articles path="/" />
        <Articles path="/articles" />
        <SingleArticle path="/articles/:article_id" />
        <Comments path="/articles/:article_id/comments" />
        <Topics path="/topics/*" />
      </Router>
    </div>
  );
}

export default App;
