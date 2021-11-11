import React from "react";

import { UserType } from "../App";
import UserItem from "./UserItem";

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
  return (
    <div>
      <UserItem
        users={users}
        selectUser={selectUser}
        selectUserFunction={selectUserFunction}
      />
    </div>
  );
};

export default Home;
