import React, { useState } from "react";

import { UserType } from "../App";
import UserItem from "./UserItem";
import AddUser from "./AddUser";
import { ActionType } from "./AddUser";
import { type } from "os";

//Recept - only declares the type of what is passed on as a prop.
type HomeProps = {
  selectedUser?: UserType;
  userToUpdate?: UserType;
  users: UserType[];
  addUserToList: (user: UserType) => void;
  deleteUserFromList: (users: UserType[], id: number) => void;
  updateUserFromList: (user: UserType) => void;
  selectUserFromList: (users: UserType[], id: number) => void;
  selectUserToUpdateFromList: (users: UserType[], id: number) => void;
};

const Home: React.FC<HomeProps> = ({
  users,
  selectedUser,
  userToUpdate,
  addUserToList,
  deleteUserFromList,
  updateUserFromList,
  selectUserFromList,
  selectUserToUpdateFromList,
}) => {
  return (
    <div>
      <h1>Users liking my App</h1>
      <UserItem
        selectedUser={selectedUser}
        users={users}
        deleteUserFromList={deleteUserFromList}
        selectUserFromList={selectUserFromList}
        selectUserToUpdateFromList={selectUserToUpdateFromList}
      />
      <AddUser
        //Passing down as props
        userToUpdate={userToUpdate}
        selectedUser={selectedUser}
        addUserToList={addUserToList}
        updateUserFromList={updateUserFromList}
        type={userToUpdate ? ActionType.EDITUSER : ActionType.ADDUSER}
      />
    </div>
  );
};

export default Home;
