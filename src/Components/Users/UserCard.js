import React from "react";
import { Link } from "@reach/router";

function UserCard(props) {
  const { username, avatar, name } = props;
  return (
    <li className="articleComment">
      <Link className="headingLink" to={`/users/articles/${username}`}>
        <h3 className="headingUserLink">
          <span className="redSyntax">&lt;</span>
          {username}
          <span className="redSyntax">/></span>
        </h3>
      </Link>
      <Link className="headingLink" to={`/users/articles/${username}`}>
        <img src={avatar} alt="avatar"></img>
      </Link>

      <p className="authorDateVoteP">{name}</p>
    </li>
  );
}

export default UserCard;
