import React from "react";

function Header({ user }) {
  return (
    <header className="app-header">
      <h1>
        <span className="redSyntax">&lt;</span>Northcoders News
        <span className="redSyntax">/></span>
      </h1>
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
