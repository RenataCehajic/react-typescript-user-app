import React from "react";
import { Link } from "react-router-dom";

import { UserType } from "../App";

type UserItemProps = {
  users: UserType[];
  selectUser: () => void;
  selectUserFunction: (first_name: string, last_name: string) => void;
  removeUserFromList: (users: UserType[], id: number) => void;
};

const UserItem: React.FC<UserItemProps> = ({
  users,
  selectUserFunction,
  removeUserFromList,
}) => {
  const onClick = (users: UserType[], id: number): void => {
    removeUserFromList([...users], id);
  };
  const renderList = (): JSX.Element[] => {
    return users.map((user) => {
      return (
        <li className="List">
          <div className="List-header">
            <Link to="/user">
              <h2
                onClick={() =>
                  selectUserFunction(user.first_name, user.last_name)
                }
              >
                {user.first_name} {user.last_name}
              </h2>
            </Link>
          </div>
          <p>{user.email}</p>
          <button
            className="btn btn-delete"
            onClick={() => {
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
