import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ user }) => {
  return (
    <Link to={`/description`} style={{ textDecoration: "none" }} state={user}>
      <div className="users">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt="img"
        />
        <h1>{user.name}</h1>
        <h1>{user.username}</h1>
      </div>
    </Link>
  );
};

export default UserList;
