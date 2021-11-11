import React from "react";
import { Link } from "react-router-dom";

import { UserType } from "../App";

type UserItemProps = {
  users: UserType[];
  selectUser: () => void;
  selectUserFunction: (first_name: string, last_name: string) => void;
};

const UserItem: React.FC<UserItemProps> = ({ users, selectUserFunction }) => {
  const renderList = (): JSX.Element[] => {
    return users.map((user) => {
      return (
        <li className="List">
          <div className="List-header">
            <Link to="/userId">
              <h2
                onClick={() =>
                  selectUserFunction(user.first_name, user.last_name)
                }
              >
                {user.first_name} {user.last_name}
              </h2>
            </Link>
          </div>
          <p>{user.email}</p>

          {/* <p>{user.birthday}</p> */}
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default UserItem;

// import { UserType } from "../../App";
// import { Link } from "react-router-dom";

//Recept for what type of ingredients are going to be used
// type UserItemProps = {
//   users: UserType[];
//   selectUser: () => void;
//   selectUserFunction: (first_name: string, last_name: string) => void;
// };

//Pan - where you get the ingredients and cook them
// export default function UserItem(props: UserItemProps) {
//   return (
//     <div className="Home">
//       {props.users.map((user) => (
//         <div style={{ marginTop: 30 }}>
//           <Link to="/userId">
//             <h2
//               onClick={() =>
//                 props.selectUserFunction(user.first_name, user.last_name)
//               }
//             >
//               {user.first_name} {user.last_name}
//             </h2>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

//onClick
