import React, { useState } from "react";
import { InferencePriority } from "typescript";
import { UserType } from "../App";

interface IProps {
  users: UserType[];
  addUserToList: (users: UserType[]) => void;
}

const AddUser: React.FC<IProps> = ({ users, addUserToList }) => {
  const [input, setInput] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
  });

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

    addUserToList([
      ...users,
      {
        id: parseInt(input.id),
        first_name: input.first_name,
        last_name: input.last_name,
        email: input.email,
      },
    ]);
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
        Add to List
      </button>
    </div>
  );
};

export default AddUser;
