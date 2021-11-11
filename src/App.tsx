import React, { useState } from "react";
import * as faker from "faker";
import Home from "./components/Home";

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

  for (let id = 1; id <= 100; id++) {
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

  return (
    <div className="App">
      <h1>Users liking my App</h1>
      <Home />
    </div>
  );
}

export default App;
