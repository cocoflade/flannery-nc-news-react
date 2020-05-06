import React from "react";
import { Link } from "@reach/router";

function UserCard(props) {
  const { username, avatar, name } = props;
  return (
    <li className="comment">
      <Link className="artLink" to={`/users/articles/${username}`}>
        <h3 className="articleLink">
          <span className="redSyntax">&lt;</span>
          {username}
          <span className="redSyntax">/></span>
        </h3>
      </Link>{" "}
      <img src={avatar} alt="avatar"></img>
      <p className="idP">{name}</p>
    </li>
  );
}

export default UserCard;
