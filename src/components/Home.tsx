import React, { useState } from "react";

import { UserType } from "../App";
import UserItem from "./UserItem";
import AddUser from "./AddUser";

type HomeProps = {
  users: UserType[];
  selectUser: () => void;
  selectUserFunction: (first_name: string, last_name: string) => void;
};

const Home: React.FC<HomeProps> = ({
  users,
  selectUserFunction,
  selectUser,
}) => {
  const [addUser, setUser] = useState<UserType[]>([]);
  console.log(addUser);

  return (
    <div>
      <h1>Users liking my App</h1>
      <UserItem
        users={users}
        selectUser={() => {}}
        selectUserFunction={selectUserFunction}
      />
      <AddUser users={users} setUser={setUser} />
    </div>
  );
};

export default Home;
