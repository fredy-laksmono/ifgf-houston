import { useState } from "react";
import NewUser from "./NewUser";

const Users = () => {
  const [NewUserMode, setNewUserMode] = useState(false);

  return (
    <div className=" grid grid-cols-7 pt-4">
      <input
        type="text"
        placeholder="Search"
        className=" col-start-2 col-span-2 row-start-1 row-span-1"
      />
      <button
        className=" col-start-6 col-span-1 row-start-1 row-span-1"
        onClick={() => {
          setNewUserMode(true);
        }}
      >
        Add User
      </button>
      <div className=" col-start-1 col-span-full row-start-2 row-span-6">
        {NewUserMode ? (
          <NewUser setNewUserMode={setNewUserMode} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Users;
