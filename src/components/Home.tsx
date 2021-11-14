import React, { useState } from "react";

import { UserType } from "../App";
import UserItem from "./UserItem";
import AddUser from "./AddUser";

type HomeProps = {
  users: UserType[];
  selectUser: () => void;
  selectUserFunction: (first_name: string, last_name: string) => void;
  addUserToList: (users: UserType[]) => void;
  removeUserFromList: (users: UserType[], id: number) => void;
};

const Home: React.FC<HomeProps> = ({
  users,
  selectUserFunction,
  selectUser,
  addUserToList,
  removeUserFromList,
}) => {
  return (
    <div>
      <h1>Users liking my App</h1>
      <UserItem
        users={users}
        selectUser={() => {}}
        selectUserFunction={selectUserFunction}
        removeUserFromList={removeUserFromList}
      />
      <AddUser addUserToList={addUserToList} users={users} />
    </div>
  );
};

export default Home;
