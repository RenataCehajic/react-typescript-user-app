import React, { useState } from "react";
import { Link } from "react-router-dom";

import { UserType } from "../App";

type UserItemProps = {
  selectedUser?: UserType;
  users: UserType[];
  deleteUserFromList: (users: UserType[], id: number) => void;
  selectUserFromList: (users: UserType[], id: number) => void;
  selectUserToUpdateFromList: (users: UserType[], id: number) => void;
};

//Here you actually use a function.
const UserItem: React.FC<UserItemProps> = ({
  selectedUser,
  users,
  deleteUserFromList,
  selectUserFromList,
  selectUserToUpdateFromList,
}) => {
  const onClick = (users: UserType[], id: number): void => {
    deleteUserFromList([...users], id);
  };

  const onChange = (users: UserType[], id: number): void => {
    selectUserToUpdateFromList([...users], id);
  };

  const renderList = (): JSX.Element[] => {
    return users.map((user) => {
      // console.log("User birthday", user.birthday?.getFullYear());
      return (
        <li className="List">
          <div className="List-header">
            <Link to="/user">
              <h2 onClick={() => selectUserFromList(users, user.id)}>
                {user.first_name} {user.last_name}
              </h2>
            </Link>
          </div>
          <p>{user.email}</p>
          <p>Year of Birth: {user.birthday?.getFullYear()}</p>
          <button
            className="btn btn-edit"
            onClick={() => {
              //onclick is just a name, you pass a value here.
              onChange(users, user.id);
            }}
          >
            <span className="mdi mdi-edit mdi-24px"></span>
            <span className="mdi mdi-edit-empty mdi-24px"></span>
            <span>Edit</span>
          </button>
          <button
            className="btn btn-delete"
            onClick={() => {
              //onclick is just a name, you pass a value here.
              onClick(users, user.id);
            }}
          >
            <span className="mdi mdi-delete mdi-24px"></span>
            <span className="mdi mdi-delete-empty mdi-24px"></span>
            <span>Delete</span>
          </button>
          {/* <p>{user.birthday}</p> */}
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default UserItem;
