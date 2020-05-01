import React from "react";
import { Link } from "@reach/router";
import "../App.css";

function NavBar() {
  return (
    <nav className="navBar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/articles">
        Articles
      </Link>
      <Link className="link" to="/topics">
        Topics
      </Link>
      <Link className="link" to="/users">
        Users
      </Link>
    </nav>
  );
}

export default NavBar;
