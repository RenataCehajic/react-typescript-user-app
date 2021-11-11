import React from "react";
import { Link } from "react-router-dom";
import { UserType } from "../App";

import "./User.css";

type UserProps = {
  user?: UserType;
  clearUser: () => void;
};

export default function User(props: UserProps) {
  return (
    <div className="User">
      <div>
        <h2>
          {props.user?.first_name} {props.user?.last_name}
        </h2>
        <Link to="/">
          {props.user === undefined ? (
            <h1>Please select a user.</h1>
          ) : (
            <button
              className="Button"
              onClick={() => {
                props.clearUser();
              }}
            >
              Choose Another User
            </button>
          )}
        </Link>
      </div>
    </div>
  );
}
