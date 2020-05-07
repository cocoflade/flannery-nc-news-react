import React from "react";

function Header({ user }) {
  return (
    <header className="app-header">
      <h1>
        <span className="redSyntax">&lt;</span>Northcoders News
        <span className="redSyntax">/></span>
      </h1>
      <h5>
        <span className="redSyntax">&lt;</span>A Project by Luke Flannery
        <span className="redSyntax">/></span>
      </h5>
      <h3>
        {" "}
        Welcome: <span className="redSyntax">&lt;</span>
        {user}
        <span className="redSyntax">/></span>
      </h3>
    </header>
  );
}

export default Header;
