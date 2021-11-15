import React, { useState, useEffect } from "react";
import { InferencePriority } from "typescript";
import { UserType } from "../App";

// Okay hier maak je de enum
// Je hebt waarschijnlijk ook een user nodig in je props als de enum update is

export enum ActionType {
  ADDUSER = "addUser",
  EDITUSER = "editUser",
}

interface IProps {
  user?: UserType;
  users: UserType[];
  addUserToList: (users: UserType[]) => void;
  type: ActionType;
  updateUser: (users: UserType[], id: number) => void;
}

const AddUser: React.FC<IProps> = ({
  users,
  addUserToList,
  user,
  type,
  updateUser,
}) => {
  // En dan kan je op basis van je enum hier de goede data zetten
  //state aanmaken
  // const [typeUser, setTypeUser] = useState<ActionType>(ActionType.ADDUSER);
  const [input, setInput] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  //gebruik je UseEffect voor edit - als de user binnenkomt, zet hem in de state.
  //ComponentDidUpdate

  useEffect((): void => {
    setInput(response);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.first_name || !input.last_name || !input.email) {
      return;
    }

    // Dan kan je hier zeggen if (enum == add){ do addUserToList} else if (enum == update) { updateUser }
    if (type === ActionType.ADDUSER) {
      addUserToList([
        ...users,
        {
          id: parseInt(input.id),
          first_name: input.first_name,
          last_name: input.last_name,
          email: input.email,
        },
      ]);
    } else if (type === ActionType.EDITUSER) {
      //ce imas user?, lahko dobis undefined in potem resis z if(user)
      if (user) updateUser(users, user.id);
    }
    setInput({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="number"
        placeholder="User id"
        className="AddToList-input"
        value={input.id}
        onChange={handleChange}
        name="id"
      />
      <input
        type="text"
        placeholder="First name"
        className="AddToList-input"
        value={input.first_name}
        onChange={handleChange}
        name="first_name"
      />
      <input
        type="text"
        placeholder="Last name"
        className="AddToList-input"
        value={input.last_name}
        onChange={handleChange}
        name="last_name"
      />
      <input
        type="text"
        placeholder="Email"
        className="AddToList-input"
        value={input.email}
        onChange={handleChange}
        name="email"
      />

      <button className="AddToList-btn" onClick={handleClick}>
        {type === ActionType.ADDUSER ? "Add User to List" : "Edit User"}
      </button>
    </div>
  );
};

export default AddUser;

//op basis van enum laat je de text zien
