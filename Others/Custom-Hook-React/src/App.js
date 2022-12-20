import React, { useState } from "react";
import "./style.css";
import { useService } from "./useServiceHook";

export default function App() {
  const [data, fetchData] = useService();

  // initialize users with the empty Array from the custom hook
  // later call the methods to fill the Array with users
  const [users, setUsers] = useState(data);

  const fetchDataByHook = async () => {
    const usersReceived = await fetchData(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("data received from Hook", usersReceived);
    setUsers(usersReceived);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => fetchDataByHook()}>Fetch</button>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
