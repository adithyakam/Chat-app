import "./UserDisplay.css";
import React from "react";
import M from "materialize-css";

const UsersDisplay = ({ users }) => {
  return (
    <div>
      <div className="disp-Users">
        <ul class="collection">
          <h1 className="userTIltle">Users</h1>
          {users.map(({ username }) => (
            <li
              class="collection-item avatar "
              style={{ borderRadius: "4px", minHeight: "55px" }}
            >
              <div>
                <i class="material-icons circle">person</i>
                <span class="title left grey-text darken-4">{username}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersDisplay;
