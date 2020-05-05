import React from "react";

function Header({ user }) {
  return (
    <header className="app-header">
      <h1>Northcoders News</h1>
      <h3> Welcome: {user}</h3>
    </header>
  );
}

export default Header;
