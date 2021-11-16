import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as faker from "faker";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";

import "./App.css";
import { idText, updateLanguageServiceSourceFile } from "typescript";

export type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  birthday?: Date;
};

function generateUsers() {
  let users: UserType[] = [];

  for (let id = 1; id <= 4; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let birthday = faker.date.between("1950-01-01", "2021-12-31");

    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email,
      birthday,
    });
  }

  return users;
}

const App = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserType>();
  const [userToUpdate, setUserToUpdate] = useState<UserType>();
  console.log("Hi from user to update", userToUpdate);

  // ComponentDidMount - why? so your site doesn't rerender every time you render it.
  useEffect((): void => {
    const response = generateUsers();
    setUsers(response);
    // console.log("What is the response?", response);
  }, []);

  //Tu dobis users iz child component
  const addUserToList = (newUser: UserType): void => {
    const ListWithAddedUser = [
      ...users,
      {
        id: users.length + 1,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
      },
    ];
    setUsers(ListWithAddedUser);
    console.log("addUserList", ListWithAddedUser);
  };

  //Tu das users iz child component
  const updateUserFromList = (newUserToUpdate: UserType): void => {
    //Tu uporabis map zato, da je tip [] isti. Pri find dobis samo en objekt.
    const ListWithUpdatedUser = users.map((user) => {
      if (user.id === newUserToUpdate.id) {
        return {
          id: newUserToUpdate.id,
          first_name: newUserToUpdate.first_name,
          last_name: newUserToUpdate.last_name,
          email: newUserToUpdate.email,
        };
      } else {
        return user;
      }
    });
    console.log("List with updated user", ListWithUpdatedUser);
    setUsers(ListWithUpdatedUser);
    setUserToUpdate(undefined);
  };

  const selectUserToUpdateFromList = (users: UserType[], id: number) => {
    const userSelected = users.filter((user) => {
      if (id === user.id) {
        return true;
      } else {
        return false;
      }
    });
    return setUserToUpdate(userSelected[0]);
  };

  //als je op edit klikt, gerbuik je deze functue.
  const selectUserFromList = (users: UserType[], id: number) => {
    const userSelected = users.filter((user) => {
      if (id === user.id) {
        return true;
      } else {
        return false;
      }
    });
    return setSelectedUser(userSelected[0]);
  };

  const clearSelectedUser = () => {
    return setSelectedUser(undefined);
  };

  // How to delete a user? Find a user by id with a filter method and if the id matches the user id, don't delete.
  // Then pass this as a prop to a component.
  const deleteUserFromList = (users: UserType[], id: number): void => {
    const deleteUser = users.filter((user) => {
      if (id === user.id) {
        return false;
      } else {
        return true;
      }
    });
    setUsers(deleteUser);
  };

  return (
    <div className="App">
      <Navbar user={selectedUser} />
      <Routes>
        <Route
          path="/user"
          element={<User user={selectedUser} clearUser={clearSelectedUser} />}
        />
        <Route
          path="/"
          element={
            <Home
              selectedUser={selectedUser}
              addUserToList={addUserToList}
              userToUpdate={userToUpdate}
              users={users}
              selectUserToUpdateFromList={selectUserToUpdateFromList}
              deleteUserFromList={deleteUserFromList}
              updateUserFromList={updateUserFromList}
              selectUserFromList={selectUserFromList}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
