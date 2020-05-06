import React from "react";
import * as api from "../../utils/api";
import ErrorDisplay from "../ErrorDisplay";
import LoadingSign from "../Loading/LoadingSign";
import UserCard from "./UserCard";
import { Router } from "@reach/router";
import Articles from "../Articles/articles";

class Users extends React.Component {
  state = {
    users: [],
    isLoading: true,
    err: "",
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { users, isLoading, err } = this.state;

    if (isLoading) return <LoadingSign />;
    if (err) return <ErrorDisplay err={err} />;
    return (
      <main className="userPage">
        <ul className="userList">
          <h2>
            <span className="redSyntax">&lt;</span>Users
            <span className="redSyntax">/></span>
          </h2>
          {users.map((user) => {
            return (
              <UserCard
                username={user.username}
                avatar={user.avatar_url}
                name={user.name}
                key={user.username}
              />
            );
          })}
        </ul>
        <Router className="leftUserCol">
          <Articles path="/articles/:author" />
        </Router>
      </main>
    );
  }

  fetchUsers() {
    api
      .getUsers()
      .then((users) => {
        this.setState({ users, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false, err: err.data });
      });
  }
}

export default Users;
