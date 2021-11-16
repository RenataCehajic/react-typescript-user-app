import React, { useState } from "react";

import { UserType } from "../App";
import UserItem from "./UserItem";
import AddUser from "./AddUser";
import { ActionType } from "./AddUser";
import { type } from "os";

//Recept - only declares the type of what is passed on as a prop.
type HomeProps = {
  user?: UserType;
  users: UserType[];
  selectUser: () => void;
  selectUserFunction: (first_name: string, last_name: string) => void;
  addUserToList: (users: UserType[]) => void;
  deleteUserFromList: (users: UserType[], id: number) => void;
  updateUser: (users: UserType[]) => void;
  updatedUserFunction: (users: UserType[], id: number) => void;
  updatedUser: () => void;
};

const Home: React.FC<HomeProps> = ({
  users,
  user,
  selectUserFunction,
  selectUser,
  updatedUser,
  addUserToList,
  deleteUserFromList,
  updateUser,
  updatedUserFunction,
}) => {
  //state maken
  //const [showEdit, setShowEdit]
  return (
    <div>
      <h1>Users liking my App</h1>
      <UserItem
        updateUser={updateUser}
        users={users}
        selectUser={() => {}}
        updatedUser={() => {}}
        selectUserFunction={selectUserFunction}
        deleteUserFromList={deleteUserFromList}
        updatedUserFunction={updatedUserFunction}
      />
      <AddUser
        user={user}
        addUserToList={addUserToList}
        users={users}
        updateUser={updateUser}
        type={user ? ActionType.EDITUSER : ActionType.ADDUSER}
      />

      {/*      
      interface IProps {
        user: UserType;
        users: UserType[];
        addUserToList: (users: UserType[]) => void;
        type: ActionType;
        updateUser: (users: UserType[], id: number) => void;
      } */}
    </div>
  );
};

export default Home;
