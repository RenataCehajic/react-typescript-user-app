import React from "react";
import { Link } from "react-router-dom";

import { UserType } from "../App";

type UserItemProps = {
  users: UserType[];
  selectUser: () => void;
  selectUserFunction: (first_name: string, last_name: string) => void;
};

const UserItem: React.FC<UserItemProps> = ({ users, selectUserFunction }) => {
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

          {/* <p>{user.birthday}</p> */}
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default UserItem;
