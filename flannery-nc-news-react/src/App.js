import React from "react";
import "./App.css";
import Header from "./components/header";
import NavBar from "./components/navBar";
import { Router } from "@reach/router";
import Articles from "./components/articles";
import Topics from "./components/topics";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <Articles path="/" />
        <Articles path="/articles" />
        <Topics path="/topics/*" />
      </Router>
    </div>
  );
}

export default App;
