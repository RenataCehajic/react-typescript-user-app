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
  // birthday: Date;
};
function generateUsers() {
  let users: UserType[] = [];

  for (let id = 1; id <= 4; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    // let birthday = faker.date.between("1950-01-01", "2021-12-31");

    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email,
      //   birthday,
    });
  }

  return users;
}

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [selectUser, setSelectUser] = useState<UserType>();
  console.log(selectUser);
  const [updatedUser, setUpdateUser] = useState<UserType>();
  console.log("Updated user is here", updatedUser);

  // ComponentDidMount - why? so your site doesn't rerender every time you render it.
  useEffect((): void => {
    const response = generateUsers();
    setUsers(response);
    console.log("What is the response?", response);
  }, []);

  //Tu dobis users iz child component
  const addUserToList = (users: UserType[]): void => {
    setUsers(users);
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
  //Tu das users iz child component
  const updateUser = (users: UserType[], id: number): void => {
    //Tu uporabis map zato, da je tip [] isti. Pri find dobis samo en objekt.
    const updateUser = users.map((user) => {
      if (id === user.id) {
        return {
          id: 1,
          first_name: "",
          last_name: "",
          email: "",
        } as UserType;
      } else {
        return user;
      }
    });
    setUsers(updateUser);
  };

  const updatedUserFunction = (users: UserType[], id: number) => {
    const updatedUsers = users.filter((user) => {
      if (id === user.id) {
        return true;
      } else {
        return false;
      }
    });
    return setUpdateUser(updatedUsers[0]);
  };

  //You select one user with array filter method. You pass the arguments.
  const selectUserFunction = (first_name: string, last_name: string) => {
    const filteredUsers = users.filter((user) => {
      if (first_name === user.first_name && last_name === user.last_name) {
        return true;
      } else {
        return false;
      }
    });
    return setSelectUser(filteredUsers[0]);
  };

  const clearSelectedUser = () => {
    return setSelectUser(undefined);
  };

  return (
    <div className="App">
      <Navbar user={selectUser} />
      <Routes>
        <Route
          path="/user"
          element={<User user={selectUser} clearUser={clearSelectedUser} />}
        />
        <Route
          path="/"
          element={
            <Home
              addUserToList={addUserToList}
              users={users}
              user={updatedUser}
              selectUser={() => {}}
              updatedUser={() => {}}
              selectUserFunction={selectUserFunction}
              deleteUserFromList={deleteUserFromList}
              updateUser={updateUser}
              updatedUserFunction={updatedUserFunction}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
