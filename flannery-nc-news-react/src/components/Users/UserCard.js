import React from "react";
import { Link } from "@reach/router";

function UserCard(props) {
  const { username, avatar, name } = props;
  return (
    <li className="articleComment">
      <Link className="headingLink" to={`/users/articles/${username}`}>
        <h3 className="headingLink">
          <span className="redSyntax">&lt;</span>
          {username}
          <span className="redSyntax">/></span>
        </h3>
      </Link>{" "}
      <img src={avatar} alt="avatar"></img>
      <p className="authorDateVoteP">{name}</p>
    </li>
  );
}

export default UserCard;
