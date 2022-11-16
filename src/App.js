import React, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uname, uage) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        {
          id: Math.random().toString(),
          name: uname,
          age: uage,
        },
      ];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={AddUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
