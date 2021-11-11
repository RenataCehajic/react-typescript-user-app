import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import * as faker from "faker";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";

import "./App.css";

export type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  birthday: Date;
};
function generateUsers() {
  let users: UserType[] = [];

  for (let id = 1; id <= 3; id++) {
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

function App() {
  const users = generateUsers();

  const [selectUser, setSelectUser] = useState<UserType>();
  console.log(selectUser);

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
      <h1>Users liking my App</h1>
      <Routes>
        <Route
          path="/user"
          element={<User user={selectUser} clearUser={clearSelectedUser} />}
        />
        <Route
          path="/"
          element={
            <Home
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
