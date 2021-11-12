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
};
function generateUsers() {
  let users: UserType[] = [];

  for (let id = 1; id <= 4; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();

    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email,
    });
  }

  return users;
}

function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  const [selectUser, setSelectUser] = useState<UserType>();
  console.log(selectUser);

  useEffect((): void => {
    const response = generateUsers();
    setUsers(response);
    console.log("What is the response?", response);
  }, []);

  const addUserToList = (users: UserType[]): void => {
    const newArr: UserType[] = [
      ...users,
      {
        id: 1,
        first_name: "",
        last_name: "",
        email: "",
      } as UserType,
    ];
    return setUsers(newArr);
  };

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
              selectUser={() => {}}
              selectUserFunction={selectUserFunction}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
