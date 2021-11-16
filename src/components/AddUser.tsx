import React, { useState, useEffect } from "react";
import {
  createModuleResolutionCache,
  ImportsNotUsedAsValues,
  InferencePriority,
} from "typescript";
import { UserType } from "../App";

// Okay hier maak je de enum
// Je hebt waarschijnlijk ook een user nodig in je props als de enum update is

export enum ActionType {
  ADDUSER = "addUser",
  EDITUSER = "editUser",
}

interface IProps {
  selectedUser?: UserType;
  userToUpdate?: UserType;
  addUserToList: (user: UserType) => void;
  type: ActionType;
  updateUserFromList: (user: UserType) => void;
}

const AddUser: React.FC<IProps> = ({
  addUserToList,
  userToUpdate,
  selectedUser,
  type,
  updateUserFromList,
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
  //ComponentDidUpdate - zet de user

  useEffect(() => {
    if (userToUpdate) {
      setInput({
        id: `${userToUpdate.id}`,
        first_name: userToUpdate.first_name,
        last_name: userToUpdate.last_name,
        email: userToUpdate.email,
      });
    }
  }, [userToUpdate]);
  console.log("What is user", userToUpdate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("Change!", e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log("input", input);
  };

  const handleClick = (): void => {
    if (!input.first_name || !input.last_name || !input.email) {
      return;
    }
    // Dan kan je hier zeggen if (enum == add){ do addUserToList} else if (enum == update) { updateUser }
    if (type === ActionType.ADDUSER) {
      addUserToList({
        id: parseInt(input.id),
        first_name: input.first_name,
        last_name: input.last_name,
        email: input.email,
      });
      console.log("A dobim?", selectedUser);
    } else if (type === ActionType.EDITUSER) {
      updateUserFromList({
        id: parseInt(input.id),
        first_name: input.first_name,
        last_name: input.last_name,
        email: input.email,
      });
      //ce imas user?, lahko dobis undefined in potem resis z if(user)
      // uporabis map, ker obstojecega userja updates.
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
      {/* <input
        type="date"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      /> */}
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
